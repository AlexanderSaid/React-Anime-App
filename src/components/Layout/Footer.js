import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className='footer-container'>
      <h3>
        <a
          href='https://www.hackyourfuture.net/'
          target='_blank'
          rel='noreferrer'
        >
          HYF
        </a>
        &nbsp;- React Module Project
      </h3>
      <p>
        by:&nbsp;
        <Link to={"about"}>Alexander Said</Link>
      </p>
    </div>
  )
}
export default Footer
