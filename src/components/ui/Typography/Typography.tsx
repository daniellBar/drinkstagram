import React from "react";
import { StyledTypography } from "./styles";
import { CSSProperties } from "styled-components";
import { COLORS } from "../../../globalStyles";

export type typographyTypes =
  | "heading"
  | "heading-sm"
  | "heading-md"
  | "heading-xl"
  | "subheading"
  | "body"
  | "body-semibold"
  | "caption"
  | "x-small"
  | "btn-medium-big"
  | "button-sm"
  | "subheading-xl"
  | "heading-xxl";

export type weightType = "regular" | "medium" | "semibold" | "bold" | "lighter";

export interface TypographyProps {
  type?: typographyTypes;
  weight?: weightType;
  color?: string;
  className?: string;
  children: React.ReactNode;
  style?: CSSProperties;
}
const Typography = ({
  children,
  type = "body",
  weight = "regular",
  color = COLORS.WHITE,
  className,
  style,
}: TypographyProps) => {
  return (
    <StyledTypography
      style={style}
      data-testid="typography"
      className={className}
      type={type}
      $weight={weight}
      color={color}
    >
      {children}
    </StyledTypography>
  );
};

export default Typography;
