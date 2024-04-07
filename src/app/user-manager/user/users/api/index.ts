import { enqueueSnackbar } from "notistack";
import { deleteData, getData } from "../../../../../api/methods";
import { GetAllResponseI } from "../../../../../api/types/response.types";
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
    if (res.status === 200) {
      enqueueSnackbar("Successfully deleted", { variant: "success" });
    }
  }

  return {
    getAllUsers,
    deleteUser,
  };
};

export default useUsersAPIs;
