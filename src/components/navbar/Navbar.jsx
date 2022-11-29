import { useNavigate } from "react-router-dom";
import navBar from "../../data/navBar.json";
import NavBarItem from "../NavBarItem/NavBarItem";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  //ve trang home
  const handlerHome = () => {
    navigate("/");
  };

  //render
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navContainer">
          <span className="logo" onClick={handlerHome}>
            Booking Website
          </span>
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        </div>
        <NavBarItem items={navBar} />
      </div>
    </div>
  );
};
export default Navbar;
