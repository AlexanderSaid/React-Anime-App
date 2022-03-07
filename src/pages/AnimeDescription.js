import "../CSS/description.css"
import { useParams } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import axios from "../apis/jikanAnime"
import AnimeInfo from "../components/Description/AnimeInfo"

import AnimeState from "../components/Description/AnimeState"
const AnimeDescription = () => {
  const { id } = useParams()

  const [show, error, loading] = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: `/anime/${id}`,
  })
  return (
    <section className='description-section'>
      <div className='description-container'>
        {loading && <p>Loading...</p>}
        {!loading && error && <p className='error'>{error}</p>}
        {!loading && !error && show && (
          <>
            <AnimeState show={show} />
            <AnimeInfo show={show} />
            <div className='trailer-container'>
              <iframe
                title={`${show.title}-trailer`}
                src={show.trailer.embed_url}
                frameBorder='0'
              ></iframe>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
export default AnimeDescription
