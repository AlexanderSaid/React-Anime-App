import useAxios from "../../hooks/useAxios"
import axios from "../../apis/jikanAnime"
import ShowCard from "../Home/ShowCard"

const DiscoverOutput = ({ url }) => {
  const [shows, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: `${url}?limit=12`,
  })

  return (
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
  )
}
export default DiscoverOutput
