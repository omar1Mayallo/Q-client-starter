import {
  Checkbox,
  TableBody as MUITableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import useFactoryActions from "../hooks/useFactoryActions";
import TableActions from "./TableActions";
import { UserModel } from "../../../../../shared/types/models/User.model";
import DeleteConfirmationModal from "./ConfirmDeleteDialog";
import { useState } from "react";
import useDeleteUsers from "../services/delete";

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
  // DELETE_DEVICE
  const { mutate, isPending } = useDeleteUsers();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState<number>();
  const handleDelete = () => {
    if (selectedRowId) {
      mutate([selectedRowId!], {
        onSuccess: () => {
          setIsModalOpen(false);
        },
      });
    }
  };

  const userActionHandlers: { [key: string]: (id: number) => void } = {
    update: (id: number) => console.log(`Editing user... ${id}`),
    delete: (id: number) => {
      setSelectedRowId(id);
      setIsModalOpen(true);
    },
  };
  const { actionsItems, isHaveNotDeleteAction } =
    useFactoryActions(userActionHandlers);

  return (
    <>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        loading={isPending}
      />
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
              <TableCell component="th" id={`${row.id}`} scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.username}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{`${row.created_at}`}</TableCell>
              <TableCell align="center">
                <TableActions actionsItems={actionsItems!} id={row.id} />
              </TableCell>
            </TableRow>
          );
        })}
      </MUITableBody>
    </>
  );
};

export default TableBody;
