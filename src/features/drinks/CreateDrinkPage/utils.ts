import {
  ERROR_COLOR,
  snackbarStyle,
  SUCCESS_COLOR,
} from "../../../globalStyles";
import { generateMockId } from "../../../utils/utils";
import { DrinkRawData } from "../types";
import { DrinkFormData } from "./DrinkForm/types";

export const convertFormDataToDrinkRawData = (data: DrinkFormData) => {
  const {
    name: strDrink,
    instructions: strInstructions,
    imgUrl: strDrinkThumb,
    ingredients,
  } = data;

  return {
    idDrink: generateMockId(),
    isCustom:true,
    strDrink,
    ...(strInstructions && { strInstructions }),
    ...(strDrinkThumb && { strDrinkThumb }),
    ...(ingredients.length && convertIngredientsToRawData(ingredients)),
  };
};

export const convertIngredientsToRawData = (
  ingredients: string[]
): Partial<DrinkRawData> => {
  return ingredients.reduce((acc, ingredient, index) => {
    acc[`strIngredient${index + 1}`] = ingredient || null;
    return acc;
  }, {} as Partial<DrinkRawData>);
};

export const generateSnackProps = (error?: Error) => {
  const variant: "error" | "success" = error ? "error" : "success";
  const message = error
    ? error.message ?? "Failed to create drink. Please try again"
    : "Drink created successfully";
  const backgroundColor = error ? ERROR_COLOR : SUCCESS_COLOR;

  return {
    variant,
    message,
    style: {
      ...snackbarStyle,
      backgroundColor,
    },
  };
};
