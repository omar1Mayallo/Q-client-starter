import { Navigate, Outlet } from "react-router-dom";
import useUserStore from "../../../store/user.store";

const PublicRoutes = ({ redirectPath = "" }: { redirectPath: string }) => {
  const token = useUserStore((s) => s.token);

  if (token) {
    return <Navigate to={`/${redirectPath}`} replace />;
  }

  return <Outlet />;
};

export default PublicRoutes;
