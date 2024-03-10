import BASE_URLS from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header = () => {
  const onlineStatus = useOnlineStatus()
  return (
    <div className="main-container">
      <div className="logo-container">
        <img className="logo" src={BASE_URLS?.LOGO_URL} />
      </div>
      <div className="nav-links">
        <ul className="nav-list">
          <li>Online Status : {onlineStatus ? "✅" : "🟥" }</li>
          <Link to={"/"}><li>Home</li></Link>
          <Link to={"/groceries"}><li>Groceries</li></Link>
          <Link to={"/about"}><li>About Us</li></Link>
          <Link to={"/contact-us"}><li>Contact Us</li></Link>
          <Link to={"/cart"}><li>Cart </li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Header