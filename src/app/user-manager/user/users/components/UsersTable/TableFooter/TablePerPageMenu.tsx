import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useGetAllUsersParamsStore from "../../../store/useGetAllUsersParams.store";
import i18next from "i18next";

const TablePerPageMenu = () => {
  const { pagination, handleChangeLimit } = useGetAllUsersParamsStore();

  return (
    <FormControl size="small" sx={{ minWidth: 90 }}>
      <InputLabel id="demo-simple-select-helper-label">
        {i18next.t("PerPage", { ns: "labels" })}
      </InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label={i18next.t("PerPage", { ns: "labels" })}
        value={pagination.limit}
        onChange={(e) => {
          handleChangeLimit(+e.target.value);
        }}
        autoWidth
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={25}>25</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TablePerPageMenu;
