import { Alert, Box } from "@mui/material";
import i18next from "i18next";
import { useParams } from "react-router-dom";
import PageBreadcrumbs from "../../../../../../shared/components/Breadcrumbs/PageBreadcrumbs";
import BackButton from "../../../../../../shared/components/Buttons/BackButton";
import PageHead from "../../../../../../shared/components/Head/PageHead";
import PermissionsTreeSkeleton from "../../../../../../shared/components/Loaders/PermissionsTreeSkeleton";
import { USER_TYPE } from "../../../../../../shared/types/models/User.model";
import PermissionsTree from "../../../../permissions/components/PermissionsTree";
import {
  useGetSystemPermissions,
  useGetUserActionsById,
} from "../../../../permissions/services/permissions.service";
import { userPermissionsBreadcrumbs } from "../../data";

const UserPermissions = () => {
  const { id } = useParams();
  const { data: systemPermissions, ...restSystemPermissions } =
    useGetSystemPermissions(USER_TYPE.ADMINISTRATIVE);

  const { data: userActions, ...restUserActions } = useGetUserActionsById(+id!);
  const isLoading =
    restSystemPermissions.isLoading || restUserActions.isLoading;
  const isError = restSystemPermissions.isError || restUserActions.isError;
  const isSuccess =
    restSystemPermissions.isSuccess || restUserActions.isSuccess;
  const error = restSystemPermissions.error || restUserActions.error;

  return (
    <>
      <PageHead title={i18next.t("USER_PERMISSIONS")}>
        <PageBreadcrumbs
          breadcrumbs={userPermissionsBreadcrumbs(i18next.t, id!)}
        />
      </PageHead>

      <BackButton />

      <Box mt={5}>
        {isLoading ? (
          <PermissionsTreeSkeleton />
        ) : isError ? (
          <Alert severity="error" variant="outlined">
            {error?.response?.data.message || i18next.t("SOMETHING_WENT_WRONG")}
          </Alert>
        ) : (
          isSuccess && (
            <PermissionsTree
              userActions={userActions}
              systemPermissions={systemPermissions!}
            />
          )
        )}
      </Box>
    </>
  );
};

export default UserPermissions;
