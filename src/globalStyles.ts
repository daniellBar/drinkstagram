import { createGlobalStyle, CSSProperties } from "styled-components";

// ------------------------ COLORS ------------------------

export const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  GREY_1: "rgb(50, 53, 57)",
  GREY_2: " rgb(54, 54, 54)",
  GREY_3: "#222",
  GREY_4: " rgb(150, 150, 150)",
  GREY_5: "#bbb",
  GREY_6: "rgb(200, 200, 200)",
  GREY_7: "#333",
  BLUE: "rgb(0, 149, 246)",
  RED_1: "#D32F2F",
  RED_2: "rgb(255, 66, 66)",
  RED_3: "rgb(255, 100, 100)",
};

export const PRIMARY_COLOR = COLORS.BLACK;
export const BORDER_COLOR = COLORS.GREY_1;
export const SUCCESS_COLOR = COLORS.BLUE;
export const ERROR_COLOR = COLORS.RED_1;

// ------------------------ SIZES ------------------------

export const BORDER_RADIUS = 8;

// ------------------------ THEMES ------------------------

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Inter', sans-serif;
  box-sizing: unset;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

a {
  text-decoration: none;
}

:root {
  font-size: 1rem;
}

body{
  font-size: 1rem;
  color: ${COLORS.WHITE};
  background-color: ${PRIMARY_COLOR};
  transition: 0.3s;
}
`;

// ------------------------ STYLES ------------------------

export const snackbarStyle: CSSProperties = {
  color: "white",
  fontSize: "14px",
  borderRadius: "8px",
  padding: "10px 16px",
};
