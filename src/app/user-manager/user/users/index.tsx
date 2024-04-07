import PageBreadcrumbs from "../../../../shared/components/Breadcrumbs/PageBreadcrumbs";
import PageHead from "../../../../shared/components/Head/PageHead";
import TableSkeleton from "../../../../shared/components/Loaders/TableSkeleton";
import UsersTable from "./components/UsersTable";
import { userBreadcrumbs } from "./data";
import useGetAllUsers from "./services/getAll";
import TableError from "./components/TableError";

const Users = () => {
  const { data, isSuccess, isLoading, isError, error } = useGetAllUsers();

  return (
    <>
      {/* PAGE_HEAD */}
      <PageHead title="Users">
        <PageBreadcrumbs breadcrumbs={userBreadcrumbs} />
      </PageHead>

      {/* TABLE */}
      {isLoading ? (
        <TableSkeleton />
      ) : isError ? (
        <TableError message={error.message} />
      ) : (
        isSuccess && (
          <UsersTable
            usersData={data.data}
            paginationDetails={data.paginationDetails}
          />
        )
      )}
    </>
  );
};

export default Users;
