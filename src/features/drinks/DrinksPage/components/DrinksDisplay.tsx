import { useMemo } from "react";
import { DrinkRawData } from "../../types";
import { ImageWrapper, Image } from "../styles";
import { useNavigate } from "react-router-dom";
import { CLIENT_ROUTES } from "../../../../router/routes";
import { DrinkImgPlaceHolder } from "../../components/DrinkImgPlaceHolder/DrinkImgPlaceHolder";
import { FeedSkeleton } from "./FeedSkeleton";

interface DrinksDisplayProps {
  isLoading: boolean;
  search: string;
  filteredDrinks: DrinkRawData[] | null;
  combinedDrinks: DrinkRawData[];
  lastDrinkRef: React.RefCallback<any>;
}

export const DrinksDisplay = ({
  isLoading,
  search,
  filteredDrinks,
  combinedDrinks,
  lastDrinkRef,
}: DrinksDisplayProps) => {
  const navigate = useNavigate();

  const onNavigate = (id: string, isCustom?: boolean) => {
    navigate(
      `${CLIENT_ROUTES.DrinkInnerPage}/${id}${isCustom ? `?isCustom=true` : ""}`
    );
  };

  const drinksToDisplay = useMemo(() => {
    if (filteredDrinks) {
      return filteredDrinks;
    }
    return combinedDrinks;
  }, [filteredDrinks, combinedDrinks]);

  if (isLoading) return <FeedSkeleton />;

  return (
    <>
      {drinksToDisplay.map((drink, idx, arr) => (
        <div
          key={drink.idDrink}
          ref={search ? null : idx === arr.length - 1 ? lastDrinkRef : null}
          onClick={() => onNavigate(drink.idDrink, !!drink.isCustom)}
        >
          <ImageWrapper>
            {drink.strDrinkThumb ? (
              <Image
                src={drink.strDrinkThumb}
                alt={`Image-${drink.strDrinkThumb}`}
              />
            ) : (
              <DrinkImgPlaceHolder title={drink.strDrink} />
            )}
          </ImageWrapper>
        </div>
      ))}
    </>
  );
};
