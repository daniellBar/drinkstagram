import { useParams, useSearchParams } from "react-router-dom";
import { useGetDrink } from "./DrinksInnerPage.api";
import { Container, InfoContainer, StyledImage } from "./styles";
import { parseDrinkRawData } from "./utils";
import Typography from "../../../components/ui/Typography/Typography";

import { COLORS } from "../../../globalStyles";
import { DrinkImgPlaceHolder } from "../components/DrinkImgPlaceHolder/DrinkImgPlaceHolder";
import { Skeleton } from "../../../components/ui/Skeleton/Skeleton";
import { NotFoundPage } from "../../NotFoundPage/NotFoundPage";

export const DrinksInnerPage = () => {
  const { id = "" } = useParams();

  const [searchParams] = useSearchParams();

  const isCustomDrink = searchParams.get("isCustom");

  const {
    data: drinkData,
    isLoading,
    isError,
  } = useGetDrink(id, !!isCustomDrink);

  const { name, img, instructions, glass, ingredients } =
    parseDrinkRawData(drinkData) ?? {};

  if (isError || !drinkData) {
    return <NotFoundPage />;
  }

  return (
    <Container>
      {isLoading ? (
        <Skeleton height={40} width={500} count={10} />
      ) : (
        <>
          <Typography weight="bold" type="heading-md">
            {name}
          </Typography>

          {img ? (
            <StyledImage src={img} alt={name} />
          ) : (
            <DrinkImgPlaceHolder type="stand-alone" />
          )}

          {instructions && (
            <InfoContainer>
              <Typography color={COLORS.BLUE}>Instructions:</Typography>

              <Typography>{instructions}</Typography>
            </InfoContainer>
          )}

          {glass && (
            <InfoContainer>
              <Typography color={COLORS.BLUE}>Glass Type:</Typography>
              <Typography>{glass}</Typography>
            </InfoContainer>
          )}

          {ingredients?.length && (
            <InfoContainer>
              <Typography color={COLORS.BLUE}>Ingredients:</Typography>

              {ingredients.map((ingredient, index) => (
                <Typography key={index}>{ingredient}</Typography>
              ))}
            </InfoContainer>
          )}
        </>
      )}
    </Container>
  );
};
