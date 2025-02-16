import { FormControl, FormLabel, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import { labelSx, sxStyles } from "./styles";
import { ControlledInputProps } from "./types";
import Typography from "../Typography/Typography";
import { Tooltip } from "../Tooltip/Tooltip";
import { Icon } from "../Icon/Icon";

export const ControlledInput = <T extends Record<string, any>>(
  props: ControlledInputProps<T>
) => {
  const { field, fieldState } = useController(props);

  return (
    <FormControl fullWidth={props.fullWidth} sx={{ gap: "16px" }}>
      <FormLabel required={props.required} sx={labelSx}>
        <Typography type="subheading" weight="bold">
          {props.label}
        </Typography>
        {props.info && (
          <Tooltip title={props.info}>
            <div>
              <Icon component="InfoIcon" />
            </div>
          </Tooltip>
        )}
      </FormLabel>

      <TextField
        {...field}
        type={props.type ?? "text"}
        fullWidth
        error={!!fieldState.error}
        helperText={fieldState.error?.message}
        sx={sxStyles}
        multiline={props.multiline}
        rows={props.rows}
      />
    </FormControl>
  );
};
