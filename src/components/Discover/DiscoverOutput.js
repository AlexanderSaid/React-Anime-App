import useAxios from "../../hooks/useAxios"
import axios from "../../apis/jikanAnime"
import ShowCard from "../Home/ShowCard"
import { useState } from "react"
import "../../CSS/paginate.css"
import Paginate from "./Paginate"

const DiscoverOutput = ({ url }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [shows, error, loading, pages] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: `${url}?page=${currentPage}&limit=12`,
  })

  return (
    <>
      <section id='output-box' className='output-box'>
        <div className='output-container'>
          {loading && <p className='loading'>Loading...</p>}
          {!loading && error && <p className='error'>{error}</p>}
          {!loading && !error && shows && (
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
      {shows && (
        <div className='paginate-container'>
          <Paginate setCurrentPage={setCurrentPage} pages={pages} />
        </div>
      )}
    </>
  )
}
export default DiscoverOutput
