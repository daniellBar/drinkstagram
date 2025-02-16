import { Tooltip as MuiTooltip, TooltipProps } from "@mui/material";
import { ReactElement } from "react";

import { tooltipPopperStyles } from "./styles";

export interface ITooltipProps extends TooltipProps {
  title: React.ReactNode;
  children: ReactElement;
}

export const Tooltip = ({
  title,
  sx,
  children,
  placement = "top",
  ...props
}: ITooltipProps) => {
  return (
    <MuiTooltip
      data-testid="tooltip"
      title={title}
      placement={placement}
      arrow
      slotProps={{ popper: { sx: tooltipPopperStyles } }}
      {...props}
    >
      {children}
    </MuiTooltip>
  );
};
