import "../../CSS/search-bar.css";
import { useContext, useState } from "react";

import { Link /*, useSearchParams*/ } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
const SearchBar = () => {
  const { handleSubmit } = useContext(SearchContext);

  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <form
        className={`${inputValue ? "full" : ""} search-bar`}
        onSubmit={(e) => handleSubmit(e, inputValue)}
      >
        <input
          type='search'
          placeholder='Enter your search ...'
          className={"search-input"}
          aria-label='search'
          // value={searchTerm}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Link to={"anime"}>
          <span type='button' className='search-btn' aria-label='submit search'>
            <i className='fa-solid fa-magnifying-glass search-icon'></i>
          </span>
        </Link>
      </form>
    </>
  );
};
export default SearchBar;
