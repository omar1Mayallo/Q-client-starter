import {
  Checkbox,
  Chip,
  TableBody as MUITableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmDialog from "../../../../../../../shared/components/Dialogs/ConfirmDialog";
import TableRowActions from "../../../../../../../shared/components/Table/TableRowActions";
import { UserModel } from "../../../../../../../shared/types/models/User.model";
import useFactoryActions from "../../../hooks/useFactoryActions";
import useDeleteUsers from "../../../services/delete";
import { getStatusColor } from "../../../../../../../shared/helpers/factory";
import { formatToRegularString } from "../../../../../../../shared/helpers/formats";

interface TableBodyProps {
  data: UserModel[];
  isSelected: (id: number) => boolean;
  handleClick: (id: number) => void;
}

const TableBody: React.FC<TableBodyProps> = ({
  data,
  isSelected,
  handleClick,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate, isPending } = useDeleteUsers();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<number>();
  const handleDelete = () => {
    if (selectedRowId) {
      mutate([selectedRowId], {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      });
    }
  };

  const userActionHandlers: { [key: string]: (id: number) => void } = {
    update: (id: number) => navigate(`${location.pathname}/${id}`),
    delete: (id: number) => {
      setSelectedRowId(id);
      setIsModalOpen(true);
    },
  };
  const { actionsItems, isHaveNotDeleteAction } =
    useFactoryActions(userActionHandlers);

  return (
    <>
      {/* DELETE_CONFIRMATION_DIALOG */}
      <ConfirmDialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        loading={isPending}
        head="Confirm Deletion"
        contentText="Are you sure you want to delete this item(s)? This action cannot be
        undone."
      />

      {/* UPDATE_DIALOG */}
      <MUITableBody>
        {data.map((row) => {
          const isItemSelected = isSelected(row.id);

          return (
            <TableRow
              hover
              // onClick={() => handleClick(row.id)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.id}
              selected={isItemSelected}
              sx={{ cursor: "pointer" }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={isItemSelected}
                  onChange={() => handleClick(row.id)}
                  disabled={isHaveNotDeleteAction}
                />
              </TableCell>
              <TableCell
                component="th"
                id={`${row.id}`}
                scope="row"
                align="center"
              >
                {row.id}
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">
                <Chip
                  label={formatToRegularString(row.status)}
                  color={getStatusColor(row.status)}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="center">
                <Chip
                  label={formatToRegularString(row.type)}
                  color={"default"}
                  size="small"
                  variant="outlined"
                />
              </TableCell>
              <TableCell align="center">{`${row.created_at}`}</TableCell>
              <TableCell align="center">
                <TableRowActions actionsItems={actionsItems!} id={row.id} />
              </TableCell>
            </TableRow>
          );
        })}
      </MUITableBody>
    </>
  );
};

export default TableBody;
