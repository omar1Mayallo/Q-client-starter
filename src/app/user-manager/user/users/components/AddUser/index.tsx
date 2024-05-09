import i18next from "i18next";
import PageBreadcrumbs from "../../../../../../shared/components/Breadcrumbs/PageBreadcrumbs";
import BackButton from "../../../../../../shared/components/Buttons/BackButton";
import PageHead from "../../../../../../shared/components/Head/PageHead";
import { addUserBreadcrumbs } from "../../data";
import { Box, Paper } from "@mui/material";
import UserFormForAdd from "./UserFormForAdd";

const AddUser = () => {
  return (
    <>
      <PageHead title={i18next.t("ADD_USER")}>
        <PageBreadcrumbs breadcrumbs={addUserBreadcrumbs(i18next.t)} />
      </PageHead>

      <BackButton />

      <Box mt={5}>
        <Paper sx={{ width: "100%" }}>
          <UserFormForAdd />
        </Paper>
      </Box>
    </>
  );
};

export default AddUser;
