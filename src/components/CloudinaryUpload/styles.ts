import styled from "styled-components";
import { BORDER_COLOR, PRIMARY_COLOR, COLORS } from "../../globalStyles";

export const FileInputLabel = styled.label`
  cursor: pointer;
  background-color: ${PRIMARY_COLOR};
  color: ${COLORS.WHITE};
  border-radius: 8px;
  border: 2px solid ${BORDER_COLOR};
  font-size: 0.875rem;
  font-weight: bold;
  transition: background-color 0.3s, border-color 0.3s;

  width: 132px;
  height: 40px;
  text-align: center;
  line-height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${COLORS.GREY_1};
    border-color: ${COLORS.GREY_4};
  }

  &:focus {
    border-color: ${COLORS.BLUE};
  }

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
