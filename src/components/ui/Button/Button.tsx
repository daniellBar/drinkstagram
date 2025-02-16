import { CircularProgress } from "@mui/material";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ContentContainer, StyledButton } from "./styles";
import { ButtonSize, ButtonTypes } from "./types";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonTypes;
  disabled?: boolean;
  loading?: boolean;
  iconComponent?: ReactNode;
  size?: ButtonSize;
}

export const Button = ({
  size = "md",
  disabled = false,
  loading = false,
  buttonType = "primary",
  children,
  iconComponent,
  ...props
}: IButtonProps) => {
  return (
    <StyledButton
      $size={size}
      $buttonType={buttonType}
      disabled={disabled || loading}
      {...props}
    >
      <ContentContainer>
        {iconComponent && !loading && <span>{iconComponent}</span>}
        {loading && <CircularProgress size={10} />}
        {children}
      </ContentContainer>
    </StyledButton>
  );
};
