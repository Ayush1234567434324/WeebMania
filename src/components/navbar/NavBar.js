import React, { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [closeClick,setcloseClick]=useState(false);
  const handleClick = () => setClick(!click);
  const handlecloseClick=()=>{setcloseClick(!closeClick);
        setClick(!click);
  }

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 1);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  
// Inside your functional component
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);
const handleInputChange = (e) => {
  setSearchTerm(e.target.value);
};

const handleSearch = async (searchTerm) => {
  try {
    const response = await fetch(`https://universe-tau.vercel.app/api/manga`);
    const data = await response.json();

    // Assuming the API returns an array of objects with a 'name' property
    const filteredResults = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    console.log(searchResults)
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};







  return (
    <>
      <nav  className={`navbar ${visible ? 'visible' : 'hidden'}`} >
        <div className="nav-container" style={{overflow:'hidden'}} >
          <div  className="nav-logo"  >
          <div style={{ display: "flex"}}>
  <NavLink exact to="/" ><img className="vegeta-logo" src="https://i.imgur.com/hCtqhTz.png" style={{ height: "8rem", width: "auto",marginTop:"7.8rem" }} /></NavLink>
  <img className="weeb-logo" src="https://i.imgur.com/rb1dKK8.png" style={{ height: "20rem", width: "auto",marginTop:"4rem",opacity:closeClick?"0":"1" }} />
</div>


          </div>

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
                MY PDF
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
        <li>
      <div
        className="searchBox"
        style={
          window.innerWidth <= 960
            ? click
              ? { top: 0 }
              : { top: '50px' }
            : { top: '50px' }
        }
      >

<input
  className="searchInput"
  type="text"
  name=""
  placeholder="Search"
  value={searchTerm}
  onChange={handleInputChange}
/>
<button className="searchButton" onClick={handleSearch}>
  <i className="fa fa-search"></i>
</button>

      </div>
    </li>
      </nav>
    </>
  );
}

export default NavBar;
