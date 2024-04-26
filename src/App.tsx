import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./404";
import Login from "./app/authentication/pages/login";
import useLoginAPIs from "./app/authentication/pages/login/api/login.api";
import Register from "./app/authentication/pages/register";

import Dashboard from "./app/dashboard";
import Dues from "./app/financial-services/billing-manager/dues";
import Invoices from "./app/financial-services/billing-manager/invoices";
import Payments from "./app/financial-services/billing-manager/payments";
import Plans from "./app/financial-services/plans";
import Groups from "./app/user-manager/group";
import useGetUserPermissions, {
  useGetUserActions,
} from "./app/user-manager/permissions/services/permissions.service";
import Roles from "./app/user-manager/role";
import Users from "./app/user-manager/user/users";
import AddUser from "./app/user-manager/user/users/components/AddUser";
import UserDetails from "./app/user-manager/user/users/components/UserDetails";
import FullAppLoading from "./shared/components/Loaders/FullAppLoading";
import ProtectedRoutes from "./shared/components/Routes/ProtectedRoutes";
import PublicRoutes from "./shared/components/Routes/PublicRoutes";
import { toastError } from "./shared/components/Toasts";
import Settings from "./app/settings";
import Customers from "./app/customers-management/customers";
import Subscriptions from "./app/customers-management/subscriptions";

function App() {
  const {
    data: permissions,
    isLoading: isLoadingPermissions,
    isError: isErrorPermissions,
  } = useGetUserPermissions();
  const { isLoading: isLoadingActions, isError: isErrorActions } =
    useGetUserActions();
  const { logout } = useLoginAPIs();
  const { t } = useTranslation();

  const firstPermissionsItem =
    permissions?.entities && permissions?.entities[0];
  const firstEntityUrl = firstPermissionsItem?.entity_url;
  const firstModuleEntityUrl =
    firstPermissionsItem?.entities &&
    firstPermissionsItem?.entities[0]?.entity_url;
  const redirectPath: string = firstEntityUrl || firstModuleEntityUrl;

  useEffect(() => {
    if (isErrorPermissions || isErrorActions) {
      toastError(t("USER_PERMISSIONS_ERROR"));
      logout(2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isErrorPermissions, isErrorActions]);

  return (
    <>
      {isLoadingPermissions || isLoadingActions ? (
        <FullAppLoading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<PublicRoutes redirectPath={redirectPath} />}
          >
            <Route index element={<Navigate to={"/login"} />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes inLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/users-management">
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="users">
                <Route index element={<Users />} />
                <Route path="add" element={<AddUser />} />
                <Route path=":id" element={<UserDetails />} />
              </Route>
              <Route path="roles" element={<Roles />} />
              <Route path="groups" element={<Groups />} />
            </Route>

            <Route path="/financial-services">
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="plans" element={<Plans />} />
              <Route path="billing-management">
                <Route index element={<Navigate to={"/login"} />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="payments" element={<Payments />} />
                <Route path="dues" element={<Dues />} />
              </Route>
            </Route>

            <Route path="/customers-management">
              <Route index element={<Navigate to={"/login"} />} />
              <Route path="customers">
                <Route index element={<Customers />} />
              </Route>
              <Route path="subscriptions">
                <Route index element={<Subscriptions />} />
              </Route>
            </Route>
          </Route>

          <Route element={<ProtectedRoutes />}>
            <Route path="/short-code" element={<Dues />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}
export default App;
