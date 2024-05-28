import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseErrorsI } from "../../../../api/types/response.types";
import CACHED_KEYS from "../../../../shared/constants/query-cached-keys";
import { USER_TYPE } from "../../../../shared/types/models/User.model";
import useUserStore from "../../../../store/user.store";
import usePermissionsAPIs from "../api/permission.api";
import { PermissionsTreeI } from "../types";

export default function useGetUserPermissions() {
  const { getLoggedUserPermissions } = usePermissionsAPIs();
  const { token, userPermissions } = useUserStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useQuery<any, AxiosError<ResponseErrorsI>>({
    queryKey: [CACHED_KEYS.LOGGED_USER_PERMISSIONS],
    queryFn: getLoggedUserPermissions,
    placeholderData: userPermissions,
    enabled: !!token, // Just trigger if user authenticated
    // staleTime: Infinity, // Consider as Fresh Forever
    refetchInterval: 5000 * 6, // Refetch every 5 seconds
  });
}

export function useGetUserActions() {
  const { getLoggedUserActions } = usePermissionsAPIs();
  const { token, userActions } = useUserStore();
  return useQuery<string[], AxiosError<ResponseErrorsI>>({
    queryKey: [CACHED_KEYS.LOGGED_USER_ACTIONS],
    queryFn: getLoggedUserActions,
    placeholderData: userActions,
    enabled: !!token, // Just trigger if user authenticated
    // staleTime: Infinity, // Consider as Fresh Forever
    refetchInterval: 5000 * 6, // Refetch every 5 seconds
  });
}

export function useGetSystemPermissions(origin: USER_TYPE) {
  const { getSystemPermissions } = usePermissionsAPIs();
  return useQuery<PermissionsTreeI, AxiosError<ResponseErrorsI>>({
    queryKey: [CACHED_KEYS.SYSTEM_PERMISSIONS, origin],
    queryFn: () => getSystemPermissions(origin),
    staleTime: Infinity, // Consider as Fresh Forever
    refetchInterval: 86400000, // Refetch every 1 day (24 hours)
  });
}

export function useGetUserActionsById(id: number) {
  const { getUserActionById } = usePermissionsAPIs();
  return useQuery<string[], AxiosError<ResponseErrorsI>>({
    queryKey: [CACHED_KEYS.USER_ACTIONS, id],
    queryFn: () => getUserActionById(id),
    staleTime: Infinity, // Consider as Fresh Forever
    refetchInterval: 86400000, // Refetch every 5 seconds
  });
}
