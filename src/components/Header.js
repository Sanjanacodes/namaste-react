import { LOGO_URL } from "../utils/constants";
const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL} />
      {/* in img src => you can also give any Google open URL if you're fetching the image from there */}
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
