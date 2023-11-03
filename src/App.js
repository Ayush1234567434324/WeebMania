import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Genre} from "./components/Pages/genre";

import Read from "./components/Pages/manga card/read/read";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";


function App() {

const x=1;




  return (
    <>
    {x?
    <Router>
       <div className="pages">
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes> 
          </div>
      </Router>


    :
 
      <Router>
        <NavBar />
         
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/genre" element={<Genre/>} />
            <Route path="/:title/read" element={<Read/>}/>
          </Routes>
        </div>
        <div style={{marginTop:'20rem'}}></div>  
    <Footer/>
     
      </Router>
}
  </>
  );
}

export default App;
