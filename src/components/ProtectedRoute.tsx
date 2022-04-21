import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  user: any;
  children: React.ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (props.user === "") {
    return <Navigate to="/" replace />;
  }
  return props.children;
};

export default ProtectedRoute;
