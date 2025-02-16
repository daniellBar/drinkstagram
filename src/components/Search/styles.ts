import styled from "styled-components";
import { BORDER_RADIUS, COLORS } from "../../globalStyles";

export const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  background-color: ${COLORS.GREY_2};
  border-radius: ${BORDER_RADIUS}px;
  display: flex;
  align-items: center;
  padding: 8px 12px;
  transition: all 0.3s ease;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  background: transparent;
  border: none;
  color: white;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: ${COLORS.GREY_5};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
