const AnimeInfo = ({ show }) => {
  return (
    <div className='des-info-container'>
      <div className='title-container'>
        <h2>
          <a href={show.url} target='_blank' rel='noreferrer'>
            {show.title}
          </a>
        </h2>
        {show.title_english && <h4>{show.title_english}</h4>}
        {show.season && (
          <p className='season'>
            {show.season} &#9670; <span className='year'>{show.year}</span>
          </p>
        )}
      </div>
      <div className='synopsis-container'>
        <h4>Synopsis:</h4>
        <p>{show.synopsis}</p>
      </div>
    </div>
  )
}
export default AnimeInfo
