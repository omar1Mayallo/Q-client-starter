import { TFunction } from "i18next";
import { TableHeadCell } from "../../../../../shared/types/Interfaces/TableCellHead.interface";
import { UserModel } from "../../../../../shared/types/models/User.model";
import { USER_STATUS, USER_TYPES } from "../types";
import { IBreadcrumbs } from "../../../../../shared/types/Interfaces/Breadcrumbs.interface";

// _BREADCRUMBS
export const userBreadcrumbs = (
  t: TFunction<["translation", ...string[]], undefined>,
): IBreadcrumbs[] => [
  { name: t("USERS_MANAGEMENT", { ns: "labels" }) },
  { name: t("USERS", { ns: "labels" }) },
];
export const userDetailsBreadcrumbs = (
  t: TFunction<["translation", ...string[]], undefined>,
  id: string,
): IBreadcrumbs[] => [
  { name: t("USERS_MANAGEMENT", { ns: "labels" }) },
  {
    name: t("USERS", { ns: "labels" }),
    url: "/users-management/users",
  },
  { name: `${t("id", { ns: "labels" })}(${id})` },
];

// _TABLE_HEAD_COLUMNS_CELLS
export const usersHeadCells = (
  t: TFunction<["translation", ...string[]], undefined>,
): TableHeadCell<UserModel>[] => [
  {
    id: "id",
    numeric: true,
    disablePadding: false,
    label: t("id", { ns: "labels" }),
    sortable: true,
  },
  {
    id: "username",
    numeric: true,
    disablePadding: false,
    label: t("username", { ns: "labels" }),
    sortable: true,
  },
  {
    id: "email",
    numeric: true,
    disablePadding: false,
    label: t("email", { ns: "labels" }),
    sortable: true,
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: t("status", { ns: "labels" }),
    sortable: true,
  },
  {
    id: "type",
    numeric: true,
    disablePadding: false,
    label: t("type", { ns: "labels" }),
    sortable: true,
  },
  {
    id: "created_at",
    numeric: true,
    disablePadding: false,
    label: t("created_at", { ns: "labels" }),
    sortable: false,
  },
  {
    id: "actions",
    numeric: true,
    disablePadding: false,
    label: t("actions", { ns: "labels" }),
    sortable: false,
  },
];

// _FILTER_OPTIONS
export const menuStatusItems = [
  { label: "All", value: "ALL" },
  { label: "Active", value: USER_STATUS.ACTIVE },
  { label: "In Active", value: USER_STATUS.INACTIVE },
];
export const menuTypesItems = [
  { label: "All", value: "ALL" },
  { label: "Administrative", value: USER_TYPES.ADMINISTRATIVE },
  { label: "Portal", value: USER_TYPES.PORTAL },
];

// _USER_TYPES_OPTIONS
export const userTypes = [
  { label: "Administrative", value: USER_TYPES.ADMINISTRATIVE },
  { label: "Portal", value: USER_TYPES.PORTAL },
];
// _USER_TYPES_OPTIONS
export const userStatus = [
  { label: "Active", value: USER_STATUS.ACTIVE },
  { label: "In Active", value: USER_STATUS.INACTIVE },
];
