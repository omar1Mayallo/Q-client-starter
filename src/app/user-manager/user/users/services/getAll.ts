import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  GetAllResponseI,
  ResponseErrorsI,
} from "../../../../../api/types/response.types";
import { UserModel } from "../../../../../shared/types/models/User.model";
import useUsersAPIs from "../api";
import useGetAllUsersParamsStore from "../store/useGetAllUsersParams.store";
import { useLocation, useNavigate } from "react-router-dom";

export default function useGetAllUsers() {
  const { getAllUsers } = useUsersAPIs();
  const location = useLocation();
  const navigate = useNavigate();
  const { pagination, search, sort, status, type } = useGetAllUsersParamsStore(
    location,
    navigate,
  )();

  return useQuery<GetAllResponseI<UserModel>, AxiosError<ResponseErrorsI>>({
    queryKey: [
      "users",
      { page: pagination.page },
      { limit: pagination.limit },
      { search },
      { sort },
      { status },
      { type },
    ],
    queryFn: () =>
      getAllUsers({
        page: pagination.page,
        limit: pagination.limit,
        ...(search && { search: `[username,email]:${search}` }),
        ...(sort && { sort }),
        ...(status && { status }),
        ...(type && { type }),
      }),
    placeholderData: keepPreviousData,
  });
}
