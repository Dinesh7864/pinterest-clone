import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("accessToken"); // ✅ Remove token
        setIsAuthenticated(false); // ✅ Update state
        navigate("/login"); // ✅ Redirect to login page
    }, [navigate, setIsAuthenticated]);

    return <h2>Logging out...</h2>;
};

export default Logout;
