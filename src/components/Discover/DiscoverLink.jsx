import { NavLink } from "react-router-dom"
import { useContext } from "react"
import PathContext from "../../context/PathContext"
const DiscoverLink = ({ props }) => {
  const { handleClick } = useContext(PathContext)
  return (
    <NavLink
      to={props.link}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#ae5600" : "",
        }
      }}
      onClick={() => handleClick(props)}
      className={`discover-link `}
    >
      {props.title}
    </NavLink>
  )
}
export default DiscoverLink
