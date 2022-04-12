import { Link } from "react-router-dom"
import PathContext from "../../context/PathContext"
import { useContext } from "react"

const Heading = ({ props }) => {
  const { handleClick } = useContext(PathContext)
  return (
    <div className='heading-title'>
      <div className='heading-title-line'>
        <h2>{props.title}</h2>
        <Link to={`discover/${props.link}`} onClick={() => handleClick(props)}>
          See more ...
        </Link>
      </div>
      <div className='ruler'></div>
    </div>
  )
}
export default Heading
