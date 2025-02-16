import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

interface DrinkFilter {
  search: string;
}

export const useDrinkFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = (searchParams.get("search") as DrinkFilter["search"]) ?? "";

  const setFilters = useCallback((filters: DrinkFilter) => {
    setSearchParams((params) => {
      if (filters.search !== undefined) {
        params.set("search", filters.search);
      }
      return params;
    });
  }, []);

  return {
    search,
    setFilters,
  };
};
