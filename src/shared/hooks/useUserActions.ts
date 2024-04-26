import { useQueryClient } from "@tanstack/react-query";
import CACHED_KEYS from "../constants/query-cached-keys";

const useUserActions = (entityName: string) => {
  const queryClient = useQueryClient();
  const actions = queryClient.getQueryData<string[]>([
    CACHED_KEYS.LOGGED_USER_ACTIONS,
  ]);

  const userActions = actions
    ?.filter((item) => item.startsWith(`${entityName}/`))
    ?.map((item) => item.split("/")[1]) as string[] | undefined;

  const isHaveNotDeleteAction = !userActions?.includes("delete");

  return { userActions, isHaveNotDeleteAction };
};

export default useUserActions;
