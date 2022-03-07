import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import About from "./pages/About"
import AnimeDescription from "./pages/AnimeDescription"
import Discover from "./pages/Discover"
import Home from "./pages/Home"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path='my-lists'
          element={
            <p className='under-dev'>This route is still under development</p>
          }
        />
        <Route path='about' element={<About />} />
        <Route path='anime/:id' element={<AnimeDescription />} />

        <Route path='discover/*' element={<Discover />}>
          <Route
            index
            element={<p className='discover-message'>Discover Anime Shows</p>}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
