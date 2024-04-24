import i18next from "i18next";
import { useParams } from "react-router-dom";
import PageBreadcrumbs from "../../../../../../shared/components/Breadcrumbs/PageBreadcrumbs";
import BackButton from "../../../../../../shared/components/Buttons/BackButton";
import PageHead from "../../../../../../shared/components/Head/PageHead";
import { userDetailsBreadcrumbs } from "../../data";
import UserForm from "./UserForm";

const UserDetails = () => {
  const params = useParams();

  return (
    <>
      <PageHead title={i18next.t("USER_DETAILS", { ns: "labels" })}>
        <PageBreadcrumbs
          breadcrumbs={userDetailsBreadcrumbs(i18next.t, params.id!)}
        />
      </PageHead>

      <BackButton />

      <UserForm />
    </>
  );
};

export default UserDetails;
