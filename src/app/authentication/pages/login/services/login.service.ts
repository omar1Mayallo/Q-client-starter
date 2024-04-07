import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { UseFormSetError } from "react-hook-form";
import catchErrors from "../../../../../api/catchErrors";
import { ResponseErrorsI } from "../../../../../api/types/response.types";
import useUserStore from "../../../../../store/user.store";
import useLoginAPIs from "../api/login.api";
import { LoginFormData } from "./../validations/login.validation";

export default function useLoginService(
  setError: UseFormSetError<LoginFormData>,
) {
  const { login } = useLoginAPIs();
  const { setToken, setUser } = useUserStore();

  return useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      setToken(res.data.token);
      setUser(res.data.user);
      enqueueSnackbar("Successfully Login", { variant: "success" });
    },
    onError: (error: AxiosError<ResponseErrorsI<keyof LoginFormData>>) =>
      catchErrors<LoginFormData>(error, setError),
  });
}
