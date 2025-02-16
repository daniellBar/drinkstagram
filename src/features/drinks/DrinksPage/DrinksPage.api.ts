import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { baseUrl, mockServerUrl } from "../consts";
import {  DrinkCategory, DrinkRawData, DrinksWrapper } from "../types";

export const getDrinks = (category: DrinkCategory) => {
  return axios.get<DrinksWrapper>(`${baseUrl}/filter.php?c=${category}`);
};

export const useGetDrinks = (
  category: DrinkCategory = DrinkCategory.COCKTAIL,
  onSuccess?: (drinks: DrinkRawData[]) => void,
  options?: Omit<
    UseQueryOptions<
      AxiosResponse<DrinksWrapper>,
      Error,
      AxiosResponse<DrinksWrapper>,
      ["drinks"]
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["drinks"],
    queryFn: () =>
      getDrinks(category).then((data) => {
        if (onSuccess) {
          onSuccess(data.data.drinks);
        }
        return data;
      }),
    ...options,
  });
};

const getUserCreatedDrinks = () => {
  return axios.get<DrinkRawData[]>(mockServerUrl);
};

export const useGetUserCreatedDrinks = (
  options?: Omit<
    UseQueryOptions<
      AxiosResponse<DrinkRawData[]>,
      Error,
      AxiosResponse<DrinkRawData[]>,
      ["user-drinks"]
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["user-drinks"],
    queryFn: () => getUserCreatedDrinks(),
    ...options,
  });
};

export const searchDrinks = (query: string) => {
  return axios.get<DrinksWrapper>(`${baseUrl}/search.php?s=${query}`);
};

export const useSearchDrinks = (
  query: string,
  options?: Omit<
    UseQueryOptions<
      AxiosResponse<DrinksWrapper>,
      Error,
      AxiosResponse<DrinksWrapper>,
      ["search-drinks"]
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["search-drinks"],
    queryFn: () => searchDrinks(query),
    ...options,
  });
};
