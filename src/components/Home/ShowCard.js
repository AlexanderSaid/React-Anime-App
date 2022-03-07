import "../../CSS/shows-sections.css"
import { Link } from "react-router-dom"
const ShowCard = ({ show }) => {
  return (
    <Link to={`/anime/${show.mal_id}`} className='show-card-container'>
      <div
        className='show-card-image-container'
        style={{ backgroundImage: `url(${show.images.webp.image_url})` }}
      ></div>
      <div className='info-container'>
        <h4 className='show-card-title'>{show.title}</h4>
        <div className='show-card-footer'>
          {show.season ? (
            <p className='season'>
              {show.season} &#9670; <span className='year'>{show.year}</span>
            </p>
          ) : (
            <p className='season'>--</p>
          )}
          <div className='add-container'></div>
          <div className='fav-container'></div>
        </div>
      </div>
    </Link>
  )
}
export default ShowCard
