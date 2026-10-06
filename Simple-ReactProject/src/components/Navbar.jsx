import logo from "../assets/images/icons/Logo (7).svg"
import {Link} from "react-router-dom"
function Navbar(){
  return(
            // flex items-center justify-between bg-white px-8 py-4 shadow-sm
    // <li><a href="" className="font-medium text-gray-700 transition hover:text-green-500">Blog</a></li>

    
    <nav className="flex justify-around items-center bg-white px-8 py-4 shadow-lg ">
     {/* log part */}
     <div>
      <Link to="/">
      <img src={logo} alt="My logo" />
      </Link>
     </div>
     {/* links part */} 
     <div className="">
        <Link className="font-medium text-gray-700 transition hover:text-green-500 p-5" to="/">Home</Link>
        <Link className="font-medium text-gray-700 transition hover:text-green-500 p-5"  to="/Features">features</Link>
        <Link className="font-medium text-gray-700 transition hover:text-green-500 p-5" to="/Community">Community</Link>
        <Link className="font-medium text-gray-700 transition hover:text-green-500 p-5" to="/Blog">Blog</Link>
        <Link className="font-medium text-gray-700 transition hover:text-green-500 p-5" to="/Pricing">Pricing</Link>
        <Link className="font-medium text-white bg-green-600 rounded-[10px] transition px-7 p-3" to="/Register">Register</Link>
     
     </div>
        

    </nav>
 
  )
}
export default Navbar;