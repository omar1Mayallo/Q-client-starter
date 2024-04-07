import { Stack, TextField, Toolbar } from "@mui/material";
import { useScreenSizeStyle } from "../../../../../shared/hooks/useStyle";
import TablePagination from "./TablePagination";
import TablePerPageMenu from "./TablePerPageMenu";

const TableFooter = ({
  totalNumOfItems,
  numOfPages,
}: {
  totalNumOfItems: number;
  numOfPages: number;
}) => {
  return (
    <Toolbar
      sx={{
        display: "flex",
        flexDirection: useScreenSizeStyle("column-reverse", "row"),
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        pl: { sm: 1 },
        pr: { xs: 1, sm: 1 },
        py: 2,
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        gap={2}
        width={useScreenSizeStyle("100%", undefined)}
      >
        <TextField
          disabled
          id="outlined-disabled"
          label="Total"
          value={totalNumOfItems}
          size={"small"}
          sx={{
            maxWidth: 90,
          }}
        />
        <TablePerPageMenu />
      </Stack>
      <TablePagination numOfPages={numOfPages} />
    </Toolbar>
  );
};

export default TableFooter;
