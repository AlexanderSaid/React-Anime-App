import { Link } from "react-router-dom";
import "../../CSS/navbar.css";
import SearchBar from "./SearchBar";
import PathContext from "../../context/PathContext";
import { useContext } from "react";
const Navbar = () => {
  const { handleClick } = useContext(PathContext);
  return (
    <div className='nav-container'>
      <div className='left-nav'>
        <div className='logo'>
          <Link to={"/"} onClick={handleClick} className='nav-link'>
            Ani4me
          </Link>
        </div>
        <div className='nav-links-container'>
          <div className='nav-links'>
            <Link to={"/"} onClick={handleClick} className='nav-link'>
              Home
            </Link>

            <Link to={"discover"} onClick={handleClick} className='nav-link'>
              Discover
            </Link>

            <Link to={"my-lists"} onClick={handleClick} className='nav-link'>
              My-Lists
            </Link>
          </div>
        </div>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};
export default Navbar;
