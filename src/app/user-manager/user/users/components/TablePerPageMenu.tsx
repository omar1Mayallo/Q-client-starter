import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import useGetAllUsersParamsStore from "../store/useGetAllUsersParams.store";
import { useLocation, useNavigate } from "react-router-dom";

const TablePerPageMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pagination, handleChangeLimit } = useGetAllUsersParamsStore(
    location,
    navigate,
  )();

  return (
    <FormControl size="small" sx={{ minWidth: 90 }}>
      <InputLabel id="demo-simple-select-helper-label">Per Page</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Per Page"
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
