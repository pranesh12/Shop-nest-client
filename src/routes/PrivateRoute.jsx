import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.loginReducer.currentUser);
  if (user.email) {
    return children;
  }
  return <Navigate to="/auth/login" replace={true}></Navigate>;
};

export default PrivateRoute;
