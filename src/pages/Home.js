import ShowsBox from "../components/Home/ShowsBox"
import TopShows from "../components/Home/TopShows"
import "../CSS/shows-sections.css"
import PathContext from "../context/PathContext"
import { useContext } from "react"

const Home = () => {
  const { paths } = useContext(PathContext)
  return (
    <>
      <TopShows props={paths.topShows} />
      <div className='home-body'>
        <ShowsBox props={paths.streamNow} />
        <ShowsBox props={paths.upcoming} />
      </div>
    </>
  )
}
export default Home
