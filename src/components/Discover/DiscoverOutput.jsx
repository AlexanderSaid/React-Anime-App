import useAxios from "../../hooks/useAxios";
import axios from "../../apis/jikanAnime";
import ShowCard from "../ShowCard";
import { useContext } from "react";
import "../../CSS/paginate.css";
import Paginate from "./Paginate";
import SearchContext from "../../context/SearchContext";

const DiscoverOutput = ({ url }) => {
  const { currentPage, setCurrentPage } = useContext(SearchContext);
  const [shows, error, loading, pages] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: `${url}${
      url.includes("sort=desc") ? "&" : "?"
    }page=${currentPage}&limit=12`,
  });

  return (
    <>
      <section id='output-box' className='output-box'>
        <div className='container'>
          {loading ? (
            <p className='loading'>Loading...</p>
          ) : !loading && error ? (
            <p className='error'>{error}</p>
          ) : !loading && !error && !shows.length ? (
            <p className='no-match'>No shows matches your query ... </p>
          ) : (
            <ul className='shows-list'>
              {shows.map((show) => (
                <li className='shows-list-item' key={show.mal_id}>
                  <ShowCard show={show} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {shows.length ? (
        <div className='paginate-container'>
          <Paginate setCurrentPage={setCurrentPage} pages={pages} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default DiscoverOutput;
