export interface TableHeadCell<Model> {
  id: keyof Model;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
  sortable: boolean;
}
