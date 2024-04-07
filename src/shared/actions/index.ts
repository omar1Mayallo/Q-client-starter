import { Delete, Edit, Key } from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export interface IActionsConfig {
  actionName: string;
  Icon: typeof SvgIcon;
}

const ActionsConfig: Record<string, IActionsConfig> = {
  update: {
    actionName: "Edit",
    Icon: Edit,
  },
  delete: {
    actionName: "Delete",
    Icon: Delete,
  },
  permissions: {
    actionName: "Permissions",
    Icon: Key,
  },
};

export default ActionsConfig;
