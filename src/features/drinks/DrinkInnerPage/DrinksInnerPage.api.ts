import axios from "axios";
import { baseUrl, mockServerUrl } from "../consts";
import { DrinkRawData, DrinksWrapper, FetchedDrinks } from "../types";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { extractDrinkFromRes } from "./utils";

const getDrink = async (
  id: string,
  isCustom: boolean
): Promise<FetchedDrinks> => {
  if (isCustom) {
    return axios
      .get<DrinkRawData[]>(`${mockServerUrl}?idDrink=${id}`)
      .then((res) => res.data);
  } else {
    return axios
      .get<DrinksWrapper>(`${baseUrl}/lookup.php?i=${id}`)
      .then((res) => res.data);
  }
};

export const useGetDrink = (
  id: string,
  isCustom: boolean,
  options?: Omit<
    UseQueryOptions<DrinkRawData, Error, DrinkRawData, ["drink", string]>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["drink", id],
    queryFn: () =>
      getDrink(id, isCustom).then((data) =>
        extractDrinkFromRes(data, isCustom)
      ),
    ...options,
  });
};
