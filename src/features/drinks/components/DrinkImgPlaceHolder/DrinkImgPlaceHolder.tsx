import Typography from "../../../../components/ui/Typography/Typography";
import { Container, createStyle } from "./styles";

export type PlaceHolderType = "grid" | "stand-alone";

interface DrinkImgPlaceHolderProps {
  title?: string;
  type?: PlaceHolderType;
}

export const DrinkImgPlaceHolder = ({
  title,
  type = "grid",
}: DrinkImgPlaceHolderProps) => {
  return (
    <Container style={createStyle(type)}>
      <Typography>{title ?? "No image"}</Typography>
    </Container>
  );
};
