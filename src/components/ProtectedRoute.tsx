import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/" replace />;
  }
  return props.children;
};

export default ProtectedRoute;
