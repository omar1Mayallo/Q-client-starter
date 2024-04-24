import { Delete, Search } from "@mui/icons-material";
import {
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import { red } from "@mui/material/colors";
import IconButtonTooltip from "../../../../../../../shared/components/Buttons/IconButtonTooltip";
import useGetAllUsersParamsStore from "../../../store/useGetAllUsersParams.store";
import TableFilterMenu from "./TableFilterMenu";
import i18next from "i18next";

interface TableSearchFiltersProps {
  selected: number[];
}

export default function TableSearchFilters({
  selected,
}: TableSearchFiltersProps) {
  const { search, handleSearch } = useGetAllUsersParamsStore();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(selected.length > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity,
            ),
        }),
      }}
    >
      {selected.length > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {i18next.t("selectedItems", {
            ns: "labels",
            number: selected.length,
          })}
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
          placeholder={i18next.t("search", {
            ns: "labels",
          })}
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      )}
      {selected.length > 0 ? (
        <IconButtonTooltip
          tooltip={i18next.t("deleteSelected", {
            ns: "labels",
          })}
          variant={red[500]}
          hover={red[700]}
          Icon={Delete}
          onClick={() => undefined}
        />
      ) : (
        <TableFilterMenu />
      )}
    </Toolbar>
  );
}
