import { useGetUserActions } from "../../app/user-manager/permissions/services/permissions.service";

const useUserActions = (entityName: string) => {
  const { data: actions } = useGetUserActions();

  const userActions = actions
    ?.filter((item) => item.startsWith(`${entityName}/`))
    ?.map((item) => item.split("/")[1]) as string[] | undefined;

  const isHaveNotDeleteAction = !userActions?.includes("delete");

  return { userActions, isHaveNotDeleteAction };
};

export default useUserActions;
