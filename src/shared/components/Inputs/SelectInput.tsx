import { Autocomplete, Chip, Paper } from "@mui/material";
import FormInput from "./FormInput";
import { useLangStyle } from "../../hooks/useStyle";

export type ValType = string | number | boolean;

export type OptionType<T extends ValType = string> = {
  label: string;
  value: T;
};

type MUISelectInputProps<T extends ValType = string> = {
  options: OptionType<T>[];
  labelKey: string;
  value: T | T[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: React.SyntheticEvent<Element, Event>, item: any) => void;
  multiple?: boolean;
  required?: boolean;
  placeholder?: string;
  defaultValue?: OptionType<T>[];
};

const MUISelectInput = <T extends ValType = string>({
  labelKey,
  options,
  value,
  onChange,
  multiple = false,
  required = false,
  placeholder = undefined,
}: MUISelectInputProps<T>) => {
  const direction = useLangStyle("rtl", "ltr");
  return (
    <Autocomplete
      multiple={multiple}
      limitTags={2}
      options={options}
      getOptionLabel={(option) => option.label}
      value={
        multiple
          ? options.filter((option) =>
              (value as ValType[]).includes(option.value),
            )
          : options.find((option) => option.value === value) ||
            (multiple ? [] : null)
      }
      onChange={onChange}
      sx={{
        "& .MuiInputBase-input": {
          direction,
        },
      }}
      PaperComponent={(props) => <Paper {...props} style={{ direction }} />}
      renderInput={(params) => (
        <FormInput
          {...params}
          labelKey={labelKey}
          placeholder={placeholder}
          required={required}
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option.label}
            sx={{ direction: "ltr" }}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default MUISelectInput;
