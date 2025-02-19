import { useCallback, useEffect, useRef, useState } from "react";
import {
  useGetDrinks,
  useGetUserCreatedDrinks,
  useSearchDrinks,
} from "./DrinksPage.api";
import { Feed, Container } from "./styles";
import { DrinkCategory, DrinkRawData } from "../types";

import SearchBar from "../../../components/Search/Search";
import { useDrinkFilters } from "../hooks/useDrinkFilters";
import { DrinksDisplay } from "./components/DrinksDisplay";
import { useDrinks } from "./useDrinks";

export const DrinksPage = () => {
  const [infiniteScrollDrinks, setInfiniteScrollDrinks] = useState<
    DrinkRawData[]
  >([]);

  // the api does not support hasMore/limit so i am mocking it by
  // fetching more categories on scroll
  const [numOfFetches, setNumOfFetches] = useState(0);

  const drinkCategories = Object.keys(DrinkCategory);

  const hasMore = numOfFetches < drinkCategories.length;

  const categoryIdx = useRef(0);

  const { setFilters, search } = useDrinkFilters();

  const {
    isLoading: isLoadingInfiniteScrollDrinks,
    isRefetching: isRefetchingInfiniteScrollDrinks,
    refetch,
  } = useGetDrinks(
    drinkCategories[categoryIdx.current] as DrinkCategory,
    (drinks) => {
      if (hasMore) {
        categoryIdx.current += 1;
        setNumOfFetches((prev) => prev + 1);
        setInfiniteScrollDrinks((prev) => [...prev, ...drinks]);
      }
    },
    {
      enabled: !search,
    }
  );

  const observer = useRef<IntersectionObserver | null>(null);

  const lastDrinkRef = useCallback(
    (node: any) => {
      if (!node) return;
      if (isRefetchingInfiniteScrollDrinks) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          refetch();
        }
      });
      observer.current.observe(node);
    },
    [isRefetchingInfiniteScrollDrinks, refetch, hasMore]
  );

  const { data: userCreatedDrinksData, isLoading: isLoadingUserCreatedDrinks } =
    useGetUserCreatedDrinks();

  const {
    data: searchedDrinksData,
    isFetching: isFetchingSearchedDrinks,
    refetch: refetchSearchedDrinks,
  } = useSearchDrinks(search, { enabled: !!search });

  useEffect(() => {
    if (search) {
      categoryIdx.current = 0;
      setNumOfFetches(0);
      refetchSearchedDrinks();
    }
  }, [search]);

  const { filteredDrinks, combinedDrinks } = useDrinks({
    search,
    searchedDrinks: searchedDrinksData?.data.drinks,
    userCreatedDrinks: userCreatedDrinksData?.data,
    infiniteScrollDrinks: infiniteScrollDrinks,
  });

  const onSearch = (value: string) => {
    setFilters({ search: value });
  };

  return (
    <Container>
      <SearchBar onSearch={onSearch} value={search} />
      <Feed>
        <DrinksDisplay
          isLoading={
            isLoadingInfiniteScrollDrinks ||
            isLoadingUserCreatedDrinks ||
            isFetchingSearchedDrinks
          }
          search={search}
          filteredDrinks={filteredDrinks}
          combinedDrinks={combinedDrinks}
          lastDrinkRef={lastDrinkRef}
        />
      </Feed>
    </Container>
  );
};
