import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  user: String;
  children: React.ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  if (props.user === null) {
    return <Navigate to="/" replace />;
  }
  return props.children;
};

export default ProtectedRoute;
