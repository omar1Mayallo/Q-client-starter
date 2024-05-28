/* eslint-disable @typescript-eslint/no-explicit-any */
import { getData } from "../../../../api/methods";
import { USER_TYPE } from "../../../../shared/types/models/User.model";
import useUserStore from "../../../../store/user.store";
import { PermissionsTreeI } from "../types";

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

  // GET System Permissions
  async function getSystemPermissions(origin: USER_TYPE) {
    const res = await getData<PermissionsTreeI>(
      `/permissions/system?origin=${origin}`,
    );
    return res.data;
  }

  // GET User Action By ID
  async function getUserActionById(id: number) {
    const res = await getData<string[]>(`/permissions/actions/${id}`);
    return res.data;
  }

  return {
    getLoggedUserPermissions,
    getLoggedUserActions,
    getSystemPermissions,
    getUserActionById,
  };
};

export default usePermissionsAPIs;
