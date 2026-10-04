import { Link } from "react-router-dom";
 import Heroimg from "../assets/images/icons/Illustration.svg"
function HeroSection(){
    return(
     <div className="flex p-20 justify-between items-center bg-gray-100 h-[600px]">
        {/*  thsi div is fore left paragraphs */}
          <div className="">
        <h1 className="text-7xl">Lessons and insights <br />
         <span className="text-green-600 ">from 8 years</span></h1>
         <p className="mt-5 text-2xl">Where to grow your business as a photographer: site or social media?</p>
        <div className="mt-5">
          <Link className="bg-green-600 mt-7 p-2 px-5 rounded-[5px]" to="/Register">Register</Link>
        </div>
       </div>
       {/*  this dev is for image right  */}
       <div>
          <img className="w-[400px]" src={Heroimg} alt="Hero image" />
       </div>

     </div>
    )
}
export default HeroSection;