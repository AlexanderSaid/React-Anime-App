import "../../CSS/search-bar.css"
const SearchBar = () => {
  return (
    <>
      <input
        type='search'
        placeholder='Enter your search ...'
        className='search-input'
        aria-label='search'
      />
      <span type='button' className='search-btn' aria-label='submit search'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </span>
    </>
  )
}
export default SearchBar
