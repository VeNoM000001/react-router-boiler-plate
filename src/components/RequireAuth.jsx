import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function RequireAuth() {
  const location = useLocation();
  const Auth = useAuth();
  if (!Auth.user) {
    return <Navigate to="./login" state={{ path: location.pathname }} />;
  }
}

export default RequireAuth;
