import ActionsConfig from "../../../../../shared/actions";
import useUserActions from "../../../../../shared/hooks/useUserActions";

const useFactoryActions = (handlers: {
  [key: string]: (id: number) => void;
}) => {
  const { userActions, isHaveNotDeleteAction } = useUserActions("users");
  const actionsItems = userActions
    ?.map((actionKey) => {
      const actionConfig = ActionsConfig[actionKey];
      if (handlers[actionKey]) {
        return {
          ...actionConfig,
          handler: handlers[actionKey],
        };
      }
      return null;
    })
    .filter((action) => action !== null);
  return { actionsItems, isHaveNotDeleteAction };
};

export default useFactoryActions;
