import { Container } from "./styles";
import Typography from "../../components/ui/Typography/Typography";

export const SomethingWentWrong = () => {
  return (
    <Container>
      <Typography type="heading-xl" weight="semibold">
        Oops... Something went wrong
      </Typography>
      <Typography type="subheading-xl">
        Refresh the page or try again later
      </Typography>
    </Container>
  );
};
