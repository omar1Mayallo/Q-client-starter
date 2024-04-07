import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { ResponseErrorsI } from "../../../../../api/types/response.types";
import useUsersAPIs from "../api";
import { useLocation, useNavigate } from "react-router-dom";
import useGetAllUsersParamsStore from "../store/useGetAllUsersParams.store";

export default function useDeleteUsers() {
  const { deleteUser } = useUsersAPIs();
  const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();
  const { pagination, search, sort, status, type } = useGetAllUsersParamsStore(
    location,
    navigate,
  )();

  return useMutation({
    mutationFn: (ids: number[]) => deleteUser(ids),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [
          "users",
          { page: pagination.page },
          { limit: pagination.limit },
          { search },
          { sort },
          { status },
          { type },
        ],
      });
    },
    onError: (error: AxiosError<ResponseErrorsI>) =>
      enqueueSnackbar(error.response?.data.message || error.message),
  });
}
