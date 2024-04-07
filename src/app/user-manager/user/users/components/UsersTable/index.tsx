import { Table as MuiTable, Paper, TableContainer } from "@mui/material";
import { PaginationDetails } from "../../../../../../api/types/response.types";
import useSelectRows from "../../../../../../shared/hooks/useSelectRows";
import { UserModel } from "../../../../../../shared/types/models/User.model";
import { usersHeadCells } from "../../data";
import TableIconButtons from "../TableIconButtons";
import TableBody from "../TableBody";
import TableFooter from "../TableFooter";
import TableHeader from "../TableHeader";
import TableNoData from "../TableNoData";
import TableSearch from "../TableSearch";

const UsersTable = ({
  usersData,
  paginationDetails,
}: {
  usersData: UserModel[];
  paginationDetails: PaginationDetails;
}) => {
  const { selected, isSelected, handleClick, handleSelectAllClick } =
    useSelectRows<UserModel>(usersData);

  return (
    <>
      {/* ACTIONS */}
      <TableIconButtons />
      <Paper sx={{ width: "100%" }}>
        {/* TABLE_SEARCH_FILTERS */}
        <TableSearch numSelected={selected.length} />

        {/* TABLE_CONTENT */}
        <TableContainer>
          <MuiTable
            sx={{ minWidth: 750 }}
            aria-labelledby="users-table"
            size={"medium"}
          >
            {/* TABLE_HEADER */}
            <TableHeader
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={usersData.length}
              headCells={usersHeadCells}
            />

            {/* TABLE_BODY */}
            {usersData.length > 0 && (
              <TableBody
                data={usersData}
                isSelected={isSelected}
                handleClick={handleClick}
              />
            )}
          </MuiTable>
        </TableContainer>

        {usersData.length === 0 && <TableNoData />}

        {usersData.length > 0 && (
          <TableFooter
            numOfPages={paginationDetails.numOfPages!}
            totalNumOfItems={paginationDetails.totalNumOfItems!}
          />
        )}
      </Paper>
    </>
  );
};

export default UsersTable;
