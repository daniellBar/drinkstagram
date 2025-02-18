import styled from "styled-components";
import { BREAKPOINT_LG } from "../../../hooks/useResponsive";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  gap: 20px;
`;

export const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 5px;
  padding: 0 15%;
  width: 100%;
  max-width: 100%;
  @media (min-width: ${BREAKPOINT_LG}px) {
    width: 75%;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  cursor: pointer;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 307px;
  max-height: 307px;
  margin: 0 auto;
`;
