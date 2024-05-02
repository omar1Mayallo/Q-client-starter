import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { UseFormSetError } from "react-hook-form";
import catchErrors from "../../../../../api/catchErrors";
import { ResponseErrorsI } from "../../../../../api/types/response.types";
import CACHED_KEYS from "../../../../../shared/constants/query-cached-keys";
import useUsersAPIs from "../api";
import { EditUserFormData } from "../validations/editUser.validations";

export default function useEditUser(
  id: number,
  setError: UseFormSetError<EditUserFormData>,
) {
  const { editUser } = useUsersAPIs();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) => editUser(id, data),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [CACHED_KEYS.USER_DETAILS, id],
      });
    },
    onError: (error: AxiosError<ResponseErrorsI<keyof EditUserFormData>>) =>
      catchErrors<EditUserFormData>(error, setError),
  });
}
