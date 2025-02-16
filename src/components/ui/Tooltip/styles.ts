import { SxProps } from "@mui/material";
import { COLORS } from "../../../globalStyles";

export const tooltipPopperStyles: SxProps = {
  "& .MuiTooltip-tooltip": {
    boxSizing: "border-box",
    padding: "12px 10px",
    backgroundColor: "#222222",
    color: COLORS.WHITE,
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
    "& .MuiTooltip-arrow": {
      color: "#222222",
    },
  },
};
