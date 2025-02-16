import styled from "styled-components";
import { PlaceHolderType } from "./DrinkImgPlaceHolder";
import { BORDER_RADIUS } from "../../../../globalStyles";

export const Container = styled.div`
  height: 100%;
  background: #29293d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
`;

export const createStyle = (type: PlaceHolderType) => {
  return {
    height: type === "grid" ? "100%" : "200px",
    ...(type === "stand-alone" && { width: "300px" }),
    ...(type === "stand-alone" && { borderRadius: `${BORDER_RADIUS}px` }),
  };
};
