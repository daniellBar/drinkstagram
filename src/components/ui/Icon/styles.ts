import { COLORS } from "../../../globalStyles";

export type IconSize =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export const iconStylesDictionary = {
  xxxs: {
    fontSize: "12px",
  },
  xxs: {
    fontSize: "14px",
  },
  xs: {
    fontSize: "16px",
  },
  sm: {
    fontSize: "18px",
  },
  md: {
    fontSize: "20px",
  },
  lg: {
    fontSize: "24px",
  },
  xl: {
    fontSize: "30px",
  },
  xxl: {
    fontSize: "45px",
  },
  xxxl: {
    fontSize: "56px",
  },
};
export const iconStyleBackground = (
  hasBackground: boolean,
  backgroundColor?: string
) =>
  hasBackground && {
    backgroundColor: backgroundColor ?? COLORS.WHITE,
    padding: "5px",
    borderRadius: "50%",
  };
