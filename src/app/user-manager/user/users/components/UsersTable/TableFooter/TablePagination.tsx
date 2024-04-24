import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import {
  useLangStyle,
  useScreenSizeStyle,
} from "../../../../../../../shared/hooks/useStyle";
import useGetAllUsersParamsStore from "../../../store/useGetAllUsersParams.store";

export default function TablePagination({
  numOfPages,
}: {
  numOfPages: number;
}) {
  const { pagination, handlePagination } = useGetAllUsersParamsStore();

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
