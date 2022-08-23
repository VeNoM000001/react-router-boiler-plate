import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Profile = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  console.log(user);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {user}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Profile;
