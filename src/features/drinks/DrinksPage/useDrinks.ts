import { useMemo } from "react";
import { DrinkRawData } from "../types";

interface UseDrinksData {
  search: string;
  userCreatedDrinks: DrinkRawData[] | undefined;
  searchedDrinks: DrinkRawData[] | undefined;
  infiniteScrollDrinks: DrinkRawData[];
}

export const useDrinks = ({
  search,
  userCreatedDrinks,
  searchedDrinks,
  infiniteScrollDrinks,
}: UseDrinksData) => {
  // user-created drinks and searched drinks
  const filteredDrinks: DrinkRawData[] | null = useMemo(() => {
    if (search) {
      const filteredUserCreatedDrinks = userCreatedDrinks?.filter((d) =>
        d.strDrink.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
      return [...(filteredUserCreatedDrinks ?? []), ...(searchedDrinks ?? [])];
    }
    return null;
  }, [search, userCreatedDrinks, searchedDrinks]);

  // user-created drinks and infinite-scroll drinks
  const combinedDrinks: DrinkRawData[] = useMemo(() => {
    return [...(userCreatedDrinks ?? []), ...infiniteScrollDrinks];
  }, [userCreatedDrinks, infiniteScrollDrinks]);

  return { filteredDrinks, combinedDrinks };
};
