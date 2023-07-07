import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './media.css';
import { Routes, Route } from "react-router-dom";
import Home from "./web/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Blog from './Blog/Blog';
import Product from './Product/Product';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Product" element={<Product/>}/>
        </Routes>
     
    </>
  );
}

export default App;
