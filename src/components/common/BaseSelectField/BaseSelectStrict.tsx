import {
  SelectProps,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

export interface IOption {
  label: string;
  value: number | string;
}

interface IProps<T extends FieldValues>
  extends Pick<
    SelectProps,
    "sx" | "className" | "size" | "variant" | "disabled"
  > {
  label?: string;
  control: Control<T>;
  name: Path<T>;
  options?: IOption[];
  helperText?: string;
}
export default function BaseSelect<T extends FieldValues = FieldValues>(
  props: IProps<T>
) {
  const { label, options, helperText, sx, ...rest } = props;

  return (
    <Controller
      control={props.control}
      name={props.name}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl error={!!error} className={props.className}>
          {/* {!!label && <InputLabel id={props.name}>{label}</InputLabel>} */}
          <Select
            // labelId={props.name}
            // label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...rest}
            sx={{ height: 38, width: 280, ...sx }}
          >
            {options?.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: 15,
                  height: 30,
                  borderRadius: 0,
                  boxShadow: "none",
                  "& .MuiList-padding": {
                    padding: 0,
                  },
                }}
                key={index}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
          {error?.message ? (
            <FormHelperText>{error.message}</FormHelperText>
          ) : (
            helperText && <FormHelperText>{helperText}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
