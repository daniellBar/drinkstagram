import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

import { IconSize, iconStyleBackground, iconStylesDictionary } from "./styles";
import * as appIcons from "./svgFiles";
import { IconType } from "./types";
import { ElementType } from "react";
import { parseSx } from "../../../utils/utils";

export interface IconProps {
  component: IconType;
  color?: string;
  size?: number | IconSize;
  disabled?: boolean;
  hasBackground?: boolean;
  backgroundColor?: string;
  variant?: "default" | "light";
  applyStokeColor?: boolean;
}

export const Icon = ({
  component,
  color,
  size = "sm",
  sx = [],
  hasBackground = false,
  backgroundColor,
  variant = "light",
  applyStokeColor = false,
  ...props
}: IconProps & Omit<SvgIconProps, keyof IconProps>) => {
  if (!component) return null;

  const iconSize =
    typeof size === "number" ? `${size}px` : iconStylesDictionary[size];

  return (
    <SvgIcon
      data-testid={`Icon-${component}`}
      component={appIcons[component] as ElementType}
      sx={[
        {
          height: iconSize,
          width: iconSize,
          ...iconStyleBackground(hasBackground, backgroundColor),
          ...{
            "&.MuiSvgIcon-root": { fill: color || "none" },
            "&.MuiSvgIcon-root path": {
              fill: color,
              stroke: applyStokeColor ? color : undefined,
            },
            "&.MuiSvgIcon-root circle": { fill: color },
            "&.MuiSvgIcon-root line": { fill: color },
            "&.MuiSvgIcon-root ellipse": { fill: color },
            "&.MuiSvgIcon-root polyline": { fill: color },
          },
        },
        ...parseSx(sx),
      ]}
      {...props}
      inheritViewBox
    />
  );
};
