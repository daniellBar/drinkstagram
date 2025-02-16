import { css } from "styled-components";
import { COLORS } from "../../../globalStyles";
import { ButtonTypes } from "./types";

export const getSizeStyles = (size?: "sm" | "md" | "lg" | "xl" | "icon") => {
  switch (size) {
    case "sm":
      return css`
        height: 32px;
        padding: 0 12px;
        font-size: 14px;
      `;
    case "lg":
      return css`
        height: 40px;
        padding: 0 20px;
        font-size: 14px;
      `;

    case "xl":
      return css`
        height: 40px;
        padding: 0 40px;
        font-size: 14px;
      `;
    case "icon":
      return css`
        width: 36px;
        height: 36px;
      `;
    default:
      return css`
        height: 36px;
        padding: 0 16px;
        font-size: 14px;
      `;
  }
};

export const getTypeStyles = (buttonType?: ButtonTypes) => {
  switch (buttonType) {
    case "primary":
      return css`
        background-color: ${COLORS.BLUE};
        border-color: ${COLORS.BLUE};
        color: rgb(255, 255, 255);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: rgba(0, 149, 246, 0.8);
        }

        &:disabled {
          background-color: rgb(38, 38, 38);
          border-color: rgba(255, 255, 255, 0.3);
        }
      `;
    case "secondary":
      return css`
        border: 1px solid rgb(255, 255, 255);
        color: rgb(255, 255, 255);
        background: transparent;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &:disabled {
          color: rgba(255, 255, 255, 0.5);
          border-color: rgba(255, 255, 255, 0.3);
        }
      `;
    default:
      return "";
  }
};
