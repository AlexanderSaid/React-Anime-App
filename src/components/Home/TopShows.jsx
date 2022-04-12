import useAxios from "../../hooks/useAxios"
import axios from "../../apis/jikanAnime"

import Heading from "./Heading"
import ShowCard from "../ShowCard"

const TopShows = ({ props }) => {
  const [shows, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: props.limit,
  })
  return (
    <section id='top-section' className='shows-box'>
      <div className='shows-container'>
        <Heading props={props} />

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
  )
}
export default TopShows
