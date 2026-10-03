// Pages
import Home from "../pages/Home";
import Features from "../pages/Features";
import Community from "../pages/Community";    
import Blog from "../pages/Blog";    
import Pricing from "../pages/Pricing";
import Eror from "../pages/Eror";
import Register from "../pages/Register";

// Components
import Navbar from "../components/Navbar";


// frame work of react
import { BrowserRouter,Routes,Route } from "react-router-dom";



function MainRoute(){
  return (
  <BrowserRouter>
        <Navbar />

    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/Features' element={<Features/>} />
    <Route path='/Community' element={<Community/>} />
    <Route path="/Blog" element={<Blog/>} />
    <Route path="/Pricing" element={<Pricing/>} />
    <Route path="/Register" element={<Register/>} />

    <Route path="*" element={<Eror/>} />
    


    </Routes>
  </BrowserRouter>
  )
  
}
export default MainRoute;