import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [closeClick,setcloseClick]=useState(false);
  const handleClick = () => setClick(!click);
  const handlecloseClick=()=>{setcloseClick(!closeClick);
        setClick(!click);
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink  className="nav-logo" exact to="/">
          <div style={{ display: "flex" }}>
  <img className="vegeta-logo" src="https://i.imgur.com/hCtqhTz.png" style={{ height: "8rem", width: "auto",marginTop:"7.8rem" }} />
  <img className="weeb-logo" src="https://i.imgur.com/rb1dKK8.png" style={{ height: "20rem", width: "auto",marginTop:"4rem",opacity:closeClick?"0":"1" }} />
</div>


          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/genre"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Genre
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>

            </li>
          </ul>
          <div className="nav-icon" >
            <i className={click ? "fa fa-times" : "fa fa-bars"} onClick={handlecloseClick}></i>
          </div>
        </div>
        <li> <div className="searchBox" style={{top:0}}>

<input className="searchInput"type="text" name="" placeholder="Search"/>
<button className="searchButton" href="#">
<i className="fa fa-search" ></i>
</button>
</div></li>
      </nav>
    </>
  );
}

export default NavBar;
