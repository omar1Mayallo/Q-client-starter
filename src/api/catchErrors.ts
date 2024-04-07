import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { FieldValues, Path, UseFormSetError } from "react-hook-form";
import { ResponseErrorsI } from "./types/response.types";

export default function catchErrors<DataT extends FieldValues>(
  error: AxiosError<ResponseErrorsI<keyof DataT>>,
  setError: UseFormSetError<DataT>,
) {
  // console.log(error);
  const resErrors = error?.response?.data;

  // HTTP(Nest)_ERRORS, DATABASE_ERRORS
  if (resErrors?.message) {
    enqueueSnackbar(resErrors?.message, { variant: "error" });
  }

  // SERVER_VALIDATION_ERRORS
  else if (resErrors?.errors) {
    enqueueSnackbar("Validation Errors", { variant: "error" });
    resErrors?.errors.forEach(({ field, message }) => {
      setError(field as Path<DataT>, { message }, { shouldFocus: true });
    });
  }

  // DEFAULT
  else {
    enqueueSnackbar(error?.message, { variant: "error" });
  }
}
