import { Add, RestartAlt } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import ExportToExcelButton from "../../../../../../../shared/components/Buttons/ExportToExcelButton";
import IconButtonTooltip from "../../../../../../../shared/components/Buttons/IconButtonTooltip";
import { isEmpty } from "../../../../../../../shared/helpers/checks";
import useCommonActions from "../../../../../../../shared/hooks/useCommonActions";
import useGetAllUsers from "../../../services/getAll";
import i18next from "i18next";

const TableIconButtons = () => {
  const { handleResetAction, queryParams } = useCommonActions();
  const { data, isSuccess } = useGetAllUsers();
  return (
    <Stack direction={"row"} justifyContent={"end"} gap={1} my={3}>
      {isSuccess && <ExportToExcelButton data={data.data} fileName="Users" />}

      <IconButtonTooltip
        tooltip={i18next.t("add", {
          ns: "labels",
        })}
        Icon={Add}
        variant={green[500]}
        textVariant={green[900]}
        hover={green[700]}
        onClick={() => undefined}
      />
      <IconButtonTooltip
        tooltip={i18next.t("reset", {
          ns: "labels",
        })}
        Icon={RestartAlt}
        variant={grey[500]}
        textVariant={grey[900]}
        hover={grey[700]}
        onClick={handleResetAction}
        disabled={isEmpty(queryParams)}
      />
    </Stack>
  );
};

export default TableIconButtons;
