import { IBreadcrumbs } from "../../../../../shared/types/Interfaces/Breadcrumbs.interface";
import { TableHeadCell } from "../../../../../shared/types/Interfaces/TableCellHead.interface";
import { UserModel } from "../../../../../shared/types/models/User.model";

export const userBreadcrumbs: IBreadcrumbs[] = [
  { name: "User Management" },
  { name: "Users", url: "/users-management/users" },
];

export const usersHeadCells: TableHeadCell<UserModel>[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Id",
    sortable: true,
  },
  {
    id: "username",
    numeric: true,
    disablePadding: false,
    label: "Username",
    sortable: true,
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: "Email",
    sortable: true,
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "Status",
    sortable: true,
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: "Type",
    sortable: true,
  },
  {
    id: "created_at",
    numeric: true,
    disablePadding: false,
    label: "Created At",
    sortable: false,
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: "Actions",
    sortable: false,
  },
];

export const menuStatusItems = [
  { label: "All", value: "ALL" },
  { label: "Active", value: "ACTIVE" },
  { label: "In Active", value: "INACTIVE" },
];

export const menuTypesItems = [
  { label: "All", value: "ALL" },
  { label: "Administrative", value: "ADMINISTRATIVE" },
  { label: "Portal", value: "PORTAL" },
];
