import { styled } from "styled-components";
import { PRIMARY_COLOR } from "../../globalStyles";
import { BREAKPOINT_SM } from "../../hooks/useResponsive";

export const SidebarContainer = styled.aside`
  width: 330px;
  background: ${PRIMARY_COLOR};
  border-right: 1px solid #222;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 40px;
  transition: width 0.3s ease;

  @media (max-width: ${BREAKPOINT_SM}px) {
    width: 60px;
    padding: 60px 10px 10px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
`;
