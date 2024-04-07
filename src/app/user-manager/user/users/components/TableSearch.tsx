import { Delete, Search } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import { red } from "@mui/material/colors";
import TableFilterMenu from "./TableFilterMenu";
import IconButtonTooltip from "../../../../../shared/components/Buttons/IconButtonTooltip";
import useGetAllUsersParamsStore from "../store/useGetAllUsersParams.store";
import { useLocation, useNavigate } from "react-router-dom";

interface TableSearchProps {
  numSelected: number;
}

export default function TableSearch({ numSelected }: TableSearchProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { search, handleSearch } = useGetAllUsersParamsStore(
    location,
    navigate,
  )();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <TextField
          fullWidth
          type="search"
          variant="outlined"
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
            sx: {
              border: "none", // Remove borders
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none", // Remove the outlined border on focus
              },
            },
          }}
          placeholder="Search..."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      )}
      {numSelected > 0 ? (
        <IconButtonTooltip
          tooltip="Delete Selected"
          variant={red[500]}
          hover={red[700]}
          Icon={Delete}
          onClick={() => console.log("Delete Selected")}
        />
      ) : (
        <TableFilterMenu />
      )}
    </Toolbar>
  );
}
