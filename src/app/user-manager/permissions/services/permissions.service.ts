import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import usePermissionsAPIs from "../api/permission.api";
import { ResponseErrorsI } from "../../../../api/types/response.types";
import useUserStore from "../../../../store/user.store";
import CACHED_KEYS from "../../../../shared/constants/query-cached-keys";

export default function useGetUserPermissions() {
  const { getLoggedUserPermissions } = usePermissionsAPIs();
  const { token, userPermissions } = useUserStore();
  return useQuery<any, AxiosError<ResponseErrorsI>>({
    queryKey: [CACHED_KEYS.LOGGED_USER_PERMISSIONS],
    queryFn: getLoggedUserPermissions,
    enabled: !!token, // Just trigger if user authenticated
    staleTime: Infinity, // Consider as Fresh Forever
    placeholderData: userPermissions,
  });
}

export function useGetUserActions() {
  const { getLoggedUserActions } = usePermissionsAPIs();
  const { token, userActions } = useUserStore();
  return useQuery<string[], AxiosError<ResponseErrorsI>>({
    queryKey: ["user-actions"],
    queryFn: getLoggedUserActions,
    enabled: !!token, // Just trigger if user authenticated
    staleTime: Infinity, // Consider as Fresh Forever
    placeholderData: userActions,
  });
}
