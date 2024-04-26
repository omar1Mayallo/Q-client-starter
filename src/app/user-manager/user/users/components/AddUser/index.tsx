import i18next from "i18next";
import PageBreadcrumbs from "../../../../../../shared/components/Breadcrumbs/PageBreadcrumbs";
import BackButton from "../../../../../../shared/components/Buttons/BackButton";
import PageHead from "../../../../../../shared/components/Head/PageHead";
import { addUserBreadcrumbs } from "../../data";
import UserForm from "../UserForm";

const AddUser = () => {
  return (
    <>
      <PageHead title={i18next.t("ADD_USER")}>
        <PageBreadcrumbs breadcrumbs={addUserBreadcrumbs(i18next.t)} />
      </PageHead>

      <BackButton />

      <UserForm />
    </>
  );
};

export default AddUser;
