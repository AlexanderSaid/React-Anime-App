import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import "../../CSS/layout.css"
import Footer from "./Footer"
const Layout = () => {
  return (
    <>
      <header className='header'>
        <Navbar />
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </>
  )
}
export default Layout
