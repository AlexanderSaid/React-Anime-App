import DiscoverOutput from "../components/Discover/DiscoverOutput";
import { useContext } from "react";
import SearchContext from "../context/SearchContext";
import { Outlet } from "react-router-dom";

const SearchResults = () => {
  const { query } = useContext(SearchContext);

  return (
    <section className='discover-container'>
      <div className='discover-links'>
        <p className='results-message'>
          Search results for : <span>{query}</span>{" "}
        </p>
      </div>
      <div className='ruler'></div>
      <div className='output-container'>
        <Outlet />
        {<DiscoverOutput url={`anime?q=${query}&order_by=score&sort=desc`} />}
      </div>
    </section>
  );
};

export default SearchResults;
