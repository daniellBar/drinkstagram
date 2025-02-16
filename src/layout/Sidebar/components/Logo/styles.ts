import styled from "styled-components";
import { COLORS } from "../../../../globalStyles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  font-weight: bold;
  color: ${COLORS.WHITE};
  font-size: 1.5rem;
`;

export const AccentText = styled.span`
  color: ${COLORS.BLUE};
`;
