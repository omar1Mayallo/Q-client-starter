import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import {
  useLangStyle,
  useScreenSizeStyle,
} from "../../../../../shared/hooks/useStyle";
import useGetAllUsersParamsStore from "../store/useGetAllUsersParams.store";
import { useLocation, useNavigate } from "react-router-dom";

export default function TablePagination({
  numOfPages,
}: {
  numOfPages: number;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { pagination, handlePagination } = useGetAllUsersParamsStore(
    location,
    navigate,
  )();

  return (
    <Pagination
      sx={{
        "& .MuiPagination-ul": {
          flexDirection: useLangStyle("row-reverse", "row"),
        },
      }}
      page={pagination.page}
      count={numOfPages}
      variant="outlined"
      color="primary"
      size={useScreenSizeStyle("large", "small", "down", "sm")}
      showFirstButton
      showLastButton
      siblingCount={useScreenSizeStyle(0, 1)}
      boundaryCount={useScreenSizeStyle(2, 1, "down", "sm")}
      renderItem={({ onClick, ...item }) => (
        <PaginationItem
          component="span"
          onClick={(e) => {
            onClick(e);
            handlePagination(item.page!);
          }}
          {...item}
        />
      )}
    />
  );
}
