import i18next from "i18next";
import { deleteData, getData } from "../../../../../api/methods";
import { GetAllResponseI } from "../../../../../api/types/response.types";
import {
  toastError,
  toastSuccess,
} from "../../../../../shared/components/Toasts";
import { UserModel } from "../../../../../shared/types/models/User.model";

const useUsersAPIs = () => {
  // GET_ALL_USERS
  async function getAllUsers(params: any) {
    const res = await getData<GetAllResponseI<UserModel>>("/users", { params });
    return res.data;
  }

  // DELETE_DEVICE
  async function deleteUser(ids: number[]) {
    const res = await deleteData(`/users`, { ids });
    console.log(res);
    if (res.status === 200) {
      toastSuccess(i18next.t("DELETED_SUCCESS", { ns: "labels" }));
    }
  }

  return {
    getAllUsers,
    deleteUser,
  };
};

export default useUsersAPIs;
