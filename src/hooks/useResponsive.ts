import { useMediaQuery } from "react-responsive";

export const BREAKPOINT_SM = 768;
export const BREAKPOINT_LG = 1550;

export const useResponsive = () => {
  const sm = useMediaQuery({ query: `(max-width: ${BREAKPOINT_SM}px)` });
  const lg = useMediaQuery({ query: `(min-width: ${BREAKPOINT_LG}px)` });
  return { sm, lg };
};
