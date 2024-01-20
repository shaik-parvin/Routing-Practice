// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-div">
    <div className="img-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="unordered-div">
      <li>
        <Link className="li" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="li" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="li" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
