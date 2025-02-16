import { SearchContainer, SearchInput } from "./styles";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface SearchBarProps {
  onSearch: (query: string) => void;
  value?: string;
}

const SearchBar = ({ onSearch, value = "" }: SearchBarProps) => {
  const [localSearch, setLocalSearch] = useState(value);

  const debouncedSearch = useDebounce(localSearch);

  useEffect(() => {
    onSearch(localSearch);
  }, [debouncedSearch]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
      />
    </SearchContainer>
  );
};

export default SearchBar;
