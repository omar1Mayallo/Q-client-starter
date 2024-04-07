import { FilterList } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNavigate } from "react-router-dom";
import useCheckedItems from "../../../../../shared/hooks/useCheckedItems";
import useDropDownMenu from "../../../../../shared/hooks/useDropDownMenu";
import { menuStatusItems, menuTypesItems } from "../data";
import useGetAllUsersParamsStore from "../store/useGetAllUsersParams.store";

export default function TableFilterMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const { handleStatus, handleType } = useGetAllUsersParamsStore(
    location,
    navigate,
  )();
  const {
    handleMenuItemClick: handleMenuStatusItemClick,
    checkedItems: checkedStatusItems,
  } = useCheckedItems("status", handleStatus);
  const {
    handleMenuItemClick: handleMenuTypeItemClick,
    checkedItems: checkedTypeItems,
  } = useCheckedItems("type", handleType);
  const { anchorEl, open, handleClick, handleClose } = useDropDownMenu();

  return (
    <Box>
      <Tooltip title="Filter">
        <IconButton onClick={handleClick}>
          <FilterList />
        </IconButton>
      </Tooltip>

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
        <Typography
          component={"h2"}
          variant={"h6"}
          color={"text.secondary"}
          sx={{
            my: 0.7,
            mx: 1.8,
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Status
        </Typography>
        {menuStatusItems.map(({ label, value }) => (
          <MenuItem
            key={value}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 1,
              py: 0,
            }}
          >
            <FormControlLabel
              disabled={value === "ALL" && checkedStatusItems.includes("ALL")}
              control={
                <Checkbox
                  onClick={() => handleMenuStatusItemClick(value)}
                  checked={checkedStatusItems.includes(value)}
                />
              }
              label={label}
              sx={{ width: "100%", m: 0 }}
            />
          </MenuItem>
        ))}

        <Divider sx={{ my: 1 }} />
        <Typography
          component={"h2"}
          variant={"h6"}
          color={"text.secondary"}
          sx={{
            my: 0.7,
            mx: 1.8,
            fontSize: "15px",
            fontWeight: "600",
          }}
        >
          Type
        </Typography>
        {menuTypesItems.map(({ label, value }) => (
          <MenuItem
            key={value}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: 1,
              py: 0,
            }}
          >
            <FormControlLabel
              disabled={value === "ALL" && checkedTypeItems.includes("ALL")}
              control={
                <Checkbox
                  onClick={() => handleMenuTypeItemClick(value)}
                  checked={checkedTypeItems.includes(value)}
                />
              }
              label={label}
              sx={{ width: "100%", m: 0 }}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
