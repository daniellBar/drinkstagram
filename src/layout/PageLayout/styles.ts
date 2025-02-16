import styled from "styled-components";
import { PRIMARY_COLOR } from "../../globalStyles";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const PageContent = styled.main`
  flex-grow: 1;
  overflow-y: auto;
  background: ${PRIMARY_COLOR};
  display: flex;
  justify-content: center;
  padding-top: 40px;
`;
