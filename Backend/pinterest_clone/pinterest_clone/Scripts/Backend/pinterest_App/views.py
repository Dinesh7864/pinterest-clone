from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

# Function to generate JWT tokens
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        "refresh": str(refresh),
        "access": str(refresh.access_token),
    }

# ✅ User Registration API
@api_view(["POST"])
def register_user(request):
    data = request.data
    if User.objects.filter(username=data["username"]).exists():
        return Response({"error": "Username already exists"}, status=400)
    
    user = User.objects.create_user(
        username=data["username"], password=data["password"], email=data["email"]
    )
    return Response({"message": "User registered successfully"}, status=201)

# ✅ User Login API (Returns JWT Token)
@api_view(["POST"])
def login_user(request):
    data = request.data
    user = authenticate(username=data["username"], password=data["password"])
    if user:
        tokens = get_tokens_for_user(user)
        return Response(tokens)
    return Response({"error": "Invalid credentials"}, status=400)

# ✅ Profile API (Protected Route)
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def user_profile(request):
    user = request.user
    return Response({
        "username": user.username,
        "email": user.email,
        "first_letter": user.username[0].upper()
    })

# ✅ Logout API (Blacklists refresh token)
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def logout_user(request):
    try:
        refresh_token = request.data["refresh"]
        token = RefreshToken(refresh_token)
        token.blacklist()  # Blacklist the refresh token
        return Response({"message": "User logged out successfully"}, status=200)
    except Exception as e:
        return Response({"error": "Invalid token"}, status=400)