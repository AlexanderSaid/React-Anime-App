import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");
  const handleSubmit = (e, value) => {
    setCurrentPage(0);
    e.preventDefault();
    setQuery(value);
    navigate("/anime");
  };

  return (
    <SearchContext.Provider
      value={{ handleSubmit, query, currentPage, setCurrentPage }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
