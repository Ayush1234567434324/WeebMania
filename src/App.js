import "./App.css";
import NavBar from "./components/navbar/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Genre} from "./components/Pages/genre";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/genre" element={<Genre/>} />
          </Routes>
        </div>
        <div style={{marginTop:'20rem'}}></div>
      <Footer/>
      
      </Router>
  </>
  );
}

export default App;
