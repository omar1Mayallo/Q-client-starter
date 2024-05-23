import { Delete, Edit, Key } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export interface IActionsConfig {
  actionName: string;
  Icon: typeof SvgIcon;
}

const ActionsConfig: Record<string, IActionsConfig> = {
  update: {
    actionName: "edit",
    Icon: Edit,
  },
  delete: {
    actionName: "delete",
    Icon: Delete,
  },
  permissions: {
    actionName: "Permissions",
    Icon: Key,
  },
};

export default ActionsConfig;
