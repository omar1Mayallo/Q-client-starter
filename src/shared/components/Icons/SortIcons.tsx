import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Stack } from "@mui/material";

const SortIcons = ({ activeAsc, activeDesc, disabled }: any) => {
  const ascColor = disabled ? "inherit" : activeAsc ? "primary" : "inherit";
  const descColor = disabled ? "inherit" : activeDesc ? "primary" : "inherit";
  return (
    <Stack sx={{ position: "relative" }}>
      <ArrowDropUp
        sx={{ position: "absolute", top: "-16px" }}
        color={ascColor}
      />
      <ArrowDropDown
        sx={{ position: "absolute", bottom: "-16px" }}
        color={descColor}
      />
    </Stack>
  );
};

export default SortIcons;
