import { MoreVert } from "@mui/icons-material";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import IconButtonTooltip from "../../../../../shared/components/Buttons/IconButtonTooltip";
import useDropDownMenu from "../../../../../shared/hooks/useDropDownMenu";
import { IActionsConfig } from "../../../../../shared/actions";

export interface ActionItems extends IActionsConfig {
  handler: (id: number) => void;
}

export interface TableActionsProps {
  id: number;
  actionsItems: ActionItems[];
}

const TableActions = ({ id, actionsItems }: TableActionsProps) => {
  const { anchorEl, open, handleClick, handleClose } = useDropDownMenu();

  return (
    <>
      <IconButtonTooltip
        tooltip={undefined}
        Icon={MoreVert}
        onClick={handleClick}
        disabled={!actionsItems?.length}
      />
      {!!actionsItems?.length && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {actionsItems?.map(({ actionName, Icon, handler }, index) => (
            <MenuItem
              key={actionName}
              divider={index !== actionsItems.length - 1}
              sx={{ py: 1.1 }}
              onClick={() => handler(id)}
            >
              <ListItemIcon>
                <Icon fontSize="medium" />
              </ListItemIcon>
              <ListItemText>{actionName}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default TableActions;
