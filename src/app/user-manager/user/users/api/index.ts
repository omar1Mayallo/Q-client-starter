import i18next from "i18next";
import { deleteData, getData } from "../../../../../api/methods";
import { GetAllResponseI } from "../../../../../api/types/response.types";
import { toastSuccess } from "../../../../../shared/components/Toasts";
import { UserModel } from "../../../../../shared/types/models/User.model";

export interface GetAllUsersParams {
  page?: number;
  limit?: number;
  search?: string;
  sort?: string;
  status?: string;
  type?: string;
}

const useUsersAPIs = () => {
  // GET_ALL_USERS
  async function getAllUsers(params: GetAllUsersParams) {
    const res = await getData<GetAllResponseI<UserModel>>("/users", { params });
    return res.data;
  }

  // DELETE_DEVICE
  async function deleteUser(ids: number[]) {
    const res = await deleteData(`/users`, { ids });
    if (res.status === 200) {
      toastSuccess(i18next.t("DELETED_SUCCESS"));
    }
  }

  return {
    getAllUsers,
    deleteUser,
  };
};

export default useUsersAPIs;
