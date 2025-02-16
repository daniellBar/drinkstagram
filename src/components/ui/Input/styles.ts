import { SxProps } from "@mui/material/styles";
import {
  BORDER_COLOR,
  BORDER_RADIUS,
  COLORS,
  PRIMARY_COLOR,
} from "../../../globalStyles";

export const sxStyles: SxProps = {
  fontSize: 14,
  color: COLORS.WHITE,
  input: {
    backgroundColor: PRIMARY_COLOR,
    color: COLORS.WHITE,
    borderRadius: `${BORDER_RADIUS}px`,
    "&::placeholder": {
      color: COLORS.GREY_4,
      opacity: 1,
      fontSize: "12px",
    },

    "&:-webkit-autofill": {
      boxShadow: `0 0 0 30px rgb(38, 38, 38) inset !important`,
      color: `${COLORS.WHITE} !important`,
      fontSize: "14px !important",
      transition: "background-color 5000s ease-in-out 0s",
    },
    "&:-webkit-autofill::first-line": {
      color: `${COLORS.WHITE} !important`,
    },
  },
  textarea: {
    backgroundColor: PRIMARY_COLOR,
    color: COLORS.WHITE,
    borderRadius: `${BORDER_RADIUS}px`,
    "&::placeholder": {
      color: COLORS.GREY_4,
      opacity: 1,
      fontSize: "12px",
    },
  },
  "& .MuiInputLabel-root:not(.Mui-error)": {
    color: COLORS.GREY_6,
  },
  "& label": {
    "&.Mui-focused:not(.Mui-error)": {
      color: COLORS.BLUE,
    },
    "&.Mui-focused.Mui-error": {
      color: `${COLORS.RED_2} !important`,
    },
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: `${BORDER_RADIUS}px`,
    "& fieldset": {
      borderColor: BORDER_COLOR,
    },
    "&:hover:not(.Mui-disabled):not(.Mui-error) fieldset": {
      borderColor: COLORS.GREY_4,
    },
    "&.Mui-focused:not(.Mui-disabled):not(.Mui-error) fieldset": {
      borderColor: COLORS.BLUE,
      borderWidth: "2px",
    },
    "&.Mui-error fieldset": {
      borderColor: `${COLORS.RED_2} !important`,
      borderWidth: "2px",
    },
    "&.Mui-error:hover fieldset": {
      borderColor: `${COLORS.RED_3} !important`,
    },
  },
};

export const labelSx = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  "& .MuiFormLabel-asterisk": { color: COLORS.WHITE },
};
