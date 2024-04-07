import { FilterList } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function FilterTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [checkedItem, setCheckedItem] = React.useState<string | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (label: string) => {
    setCheckedItem(label === checkedItem ? null : label);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "All" },
    { label: "Active" },
    { label: "In Active" },
    { label: "In Progress" },
  ];

  const isStatusFilter = false;
  const [openModal, setOpenModal] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpenModal(true);
    setScroll(scrollType);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Box>
      <Tooltip title="Filter">
        <IconButton
          onClick={isStatusFilter ? handleClick : handleClickOpen("paper")}
        >
          <FilterList />
        </IconButton>
      </Tooltip>
      {isStatusFilter ? (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          sx={{
            padding: "10px",
            "& .MuiTypography-root": {
              fontSize: "0.875rem",
            },
            "& .MuiSvgIcon-root": {
              fontSize: "1rem",
            },
          }}
        >
          {menuItems.map(({ label }) => (
            <MenuItem
              key={label}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                px: 1,
                py: 0,
              }}
            >
              <FormControlLabel
                onClick={() => handleMenuItemClick(label)}
                control={
                  <Checkbox onClick={() => handleMenuItemClick(label)} />
                }
                label={label}
                sx={{ width: "100%", m: 0 }}
              />
            </MenuItem>
          ))}
        </Menu>
      ) : (
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          scroll={"paper"}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Advanced Search</DialogTitle>
          <DialogContent dividers>
            <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
              {[...new Array(10)]
                .map(
                  () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join("\n")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal}>Cancel</Button>
            <Button onClick={handleCloseModal}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
}
