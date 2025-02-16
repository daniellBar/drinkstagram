import styled from "styled-components";
import { getSizeStyles, getTypeStyles } from "./utils";
import { ButtonTypes, ButtonSize } from "./types";
import { BORDER_RADIUS } from "../../../globalStyles";

export const StyledButton = styled.button<{
  $buttonType: ButtonTypes;
  $size: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  white-space: nowrap;
  border-radius: ${BORDER_RADIUS}px;
  transition: all 0.2s ease-in-out;
  outline: none;
  cursor: pointer;
  border: 1px solid transparent;
  min-width: 150px;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  ${({ $size }) => getSizeStyles($size)}
  ${({ $buttonType }) => getTypeStyles($buttonType)}

  .content {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
