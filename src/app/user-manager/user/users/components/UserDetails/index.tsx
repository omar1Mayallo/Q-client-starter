import { Alert, Box, Paper } from "@mui/material";
import i18next from "i18next";
import { useParams } from "react-router-dom";
import PageBreadcrumbs from "../../../../../../shared/components/Breadcrumbs/PageBreadcrumbs";
import BackButton from "../../../../../../shared/components/Buttons/BackButton";
import PageHead from "../../../../../../shared/components/Head/PageHead";
import FormSkeleton from "../../../../../../shared/components/Loaders/FormSkeleton";
import { userDetailsBreadcrumbs } from "../../data";
import useGetUser from "../../services/getOne";
import UserFormForEdit from "./UserFormForEdit";

const UserDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError, isSuccess, error } = useGetUser(+id!);

  return (
    <>
      <PageHead title={i18next.t("USER_DETAILS")}>
        <PageBreadcrumbs breadcrumbs={userDetailsBreadcrumbs(i18next.t, id!)} />
      </PageHead>

      <BackButton />

      <Box mt={5}>
        <Paper sx={{ width: "100%" }}>
          {isLoading ? (
            <FormSkeleton numOfInputs={6} />
          ) : isError ? (
            <Alert severity="error" variant="outlined">
              {error.response?.data.message ||
                i18next.t("SOMETHING_WENT_WRONG")}
            </Alert>
          ) : (
            isSuccess && <UserFormForEdit formState={data} />
          )}
        </Paper>
      </Box>
    </>
  );
};

export default UserDetails;
