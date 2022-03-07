import { useState, createContext } from "react"

const PathContext = createContext()

export const PathProvider = ({ children }) => {
  const [url, setUrl] = useState(null)
  const handleClick = (props = []) => {
    props ? setUrl(props.url) : setUrl("")
  }
  const paths = {
    topShows: {
      limit: "/top/anime?limit=3",
      url: "top/anime",
      title: "Top Shows",
      link: "top",
    },
    streamNow: {
      limit: "/seasons/now?limit=4",
      url: "/seasons/now",
      title: "Streaming Now",
      link: "now",
    },
    upcoming: {
      limit: "/seasons/upcoming?limit=4",
      url: "/seasons/upcoming",
      title: "Upcoming Anime",
      link: "upcoming",
    },
  }
  return (
    <PathContext.Provider value={{ paths, url, setUrl, handleClick }}>
      {children}
    </PathContext.Provider>
  )
}

export default PathContext
