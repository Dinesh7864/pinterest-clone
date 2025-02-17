from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def register(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            username = data.get("username")
            email = data.get("email")
            password = data.get("password")

            if User.objects.filter(username=username).exists():
                return JsonResponse({"message": "Username already taken"}, status=400)

            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()
            return JsonResponse({"message": "Registration successful"}, status=201)

        except Exception as e:
            return JsonResponse({"message": f"Error: {str(e)}"}, status=400)

    return JsonResponse({"message": "Invalid request"}, status=400)



@api_view(['POST'])
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(username=username, password=password)

    if user:
        refresh = RefreshToken.for_user(user)
        return Response({'access': str(refresh.access_token), 'refresh': str(refresh)})
    
    return Response({'error': 'Invalid credentials'}, status=400)


@api_view(['POST'])
def logout(request):
    return Response({'message': 'Logged out successfully'})
