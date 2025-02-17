import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logged out");
    navigate("/login");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
