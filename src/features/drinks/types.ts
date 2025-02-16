export enum DrinkCategory {
  COCKTAIL = "cocktail",
  SHOT = "shot",
  BEER = "beer",
}

//--------------------------------------API types---------------------------------

export interface DrinksWrapper {
  drinks: DrinkRawData[];
}

export interface DrinkRawData {
  idDrink: string;
  strDrink: string;
  strDrinkThumb?: string;
  strInstructions?: string;
  strGlass?: string;
  [key: `strIngredient${number}`]: string | null;
  isCustom?: boolean;
}

export type FetchedDrinks = DrinksWrapper | DrinkRawData[];
