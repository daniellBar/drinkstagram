import styled from "styled-components";
import { BORDER_RADIUS, COLORS } from "../../../globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  gap: 20px;
`;

export const InfoContainer = styled.div`
  background-color: ${COLORS.GREY_3};
  color: ${COLORS.WHITE};
  padding: 16px;
  border-radius: ${BORDER_RADIUS}px;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: ${BORDER_RADIUS}px;
`;
