import { useResponsive } from "../../../../hooks/useResponsive";
import { AccentText, Container } from "./styles";

export const Logo = () => {
  const { sm: isSmallScreen } = useResponsive();

  return (
    <Container>
      <AccentText>{!isSmallScreen ? "Drinks" : "D"}</AccentText>
      {!isSmallScreen && <span>gram</span>}
    </Container>
  );
};
