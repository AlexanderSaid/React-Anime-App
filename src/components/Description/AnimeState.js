const AnimeState = ({ show }) => {
  return (
    <div className='state-container'>
      <div
        className='des-image-container'
        style={{ backgroundImage: `url(${show.images.webp.image_url})` }}
      ></div>
      <div className='states'>
        <p>
          Score: &nbsp;<span>{show.score || "--"}</span>
        </p>

        <p>
          Episodes: &nbsp;<span>{show.episodes || "--"}</span>
        </p>
        <p>
          Rating: &nbsp;<span>{show.rating || "--"}</span>
        </p>
        <p>
          Genres:
          {show.genres.map((genre, index) => (
            <span key={index}>&nbsp;#{genre.name}</span>
          ))}
        </p>
      </div>
    </div>
  )
}
export default AnimeState
