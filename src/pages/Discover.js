import { Outlet } from "react-router-dom"
import DiscoverLink from "../components/Discover/DiscoverLink"

import "../CSS/discover.css"
import { useContext } from "react"
import PathContext from "../context/PathContext"
import DiscoverOutput from "../components/Discover/DiscoverOutput"
const Discover = () => {
  const { paths, url } = useContext(PathContext)
  return (
    <section className='discover-container'>
      <div className='discover-links'>
        <DiscoverLink props={paths.topShows} />
        <DiscoverLink props={paths.streamNow} />
        <DiscoverLink props={paths.upcoming} />
      </div>
      <div className='ruler'></div>
      <div className='output-container'>
        <Outlet />
        {url && <DiscoverOutput url={url} />}
      </div>
    </section>
  )
}
export default Discover
