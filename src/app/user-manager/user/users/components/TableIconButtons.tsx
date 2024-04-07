import { Stack } from "@mui/material";
import { Add, FileDownload, RestartAlt } from "@mui/icons-material";
import { blue, green, grey } from "@mui/material/colors";
import IconButtonTooltip from "../../../../../shared/components/Buttons/IconButtonTooltip";
import useCommonActions from "../../../../../shared/hooks/useCommonActions";
import { isEmpty } from "../../../../../shared/helpers/checks";

const TableIconButtons = () => {
  const { handleResetAction, queryParams } = useCommonActions();

  return (
    <Stack direction={"row"} justifyContent={"end"} gap={1} my={3}>
      <IconButtonTooltip
        tooltip="Export"
        Icon={FileDownload}
        variant={blue[500]}
        hover={blue[700]}
        onClick={() => console.log("Export")}
      />
      <IconButtonTooltip
        tooltip="Add"
        Icon={Add}
        variant={green[500]}
        textVariant={green[900]}
        hover={green[700]}
        onClick={() => console.log("Add")}
      />
      <IconButtonTooltip
        tooltip="Reset"
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
