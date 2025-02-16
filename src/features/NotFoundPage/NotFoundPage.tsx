import Typography from "../../components/ui/Typography/Typography";
import { NotFoundContainer } from "./styles";

export const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <Typography type="heading-md">
        "Oops! The page you're looking for doesn't exist"
      </Typography>
    </NotFoundContainer>
  );
};
