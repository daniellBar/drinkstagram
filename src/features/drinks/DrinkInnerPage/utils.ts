import { DrinkRawData } from "../types";
import { DrinkDetails } from "./types";

export const parseDrinkRawData = (
  data: DrinkRawData | undefined
): DrinkDetails | null => {
  if (!data) return null;
  const {
    idDrink: id,
    strDrink: name,
    strDrinkThumb: img,
    strInstructions: instructions,
    strGlass: glass,
  } = data;

  const ingredients = Object.keys(data)
    .filter(
      (key) =>
        key.startsWith("strIngredient") && data[key as keyof DrinkRawData]
    )
    .map((key) => data[key as keyof DrinkRawData] as string);

  return {
    id,
    name,
    ...(img && { img }),
    ...(instructions && { instructions }),
    ...(glass && { glass }),
    ...(ingredients.length && { ingredients }),
  };
};

export const extractDrinkFromRes = (
  data: any,
  isCustom: boolean
): DrinkRawData => {
  if (isCustom) {
    return data[0];
  }

  return data.drinks[0];
};
