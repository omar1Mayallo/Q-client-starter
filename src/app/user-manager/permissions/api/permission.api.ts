/* eslint-disable @typescript-eslint/no-explicit-any */
import { getData } from "../../../../api/methods";
import useUserStore from "../../../../store/user.store";

const usePermissionsAPIs = () => {
  const { setUserPermissions, setUserActions } = useUserStore();
  // GET Logged User Permissions
  async function getLoggedUserPermissions() {
    const res = await getData<any>("/permissions/logged-user");
    if (res.status === 200) {
      setUserPermissions(res.data);
    }
    return res.data;
  }

  // GET Logged User Actions
  async function getLoggedUserActions() {
    const res = await getData<string[]>("/permissions/logged-user-actions");
    if (res.status === 200) {
      setUserActions(res.data);
    }
    return res.data;
  }

  return { getLoggedUserPermissions, getLoggedUserActions };
};

export default usePermissionsAPIs;
