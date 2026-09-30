import logo from "../assets/images/icons/Logo (7).svg"
function Navbar(){
  return(
    <nav className="flex items-center justify-between bg-white px-8 py-4 shadow-sm">
        <div>
      <img src={logo} alt="My logo" />
    </div>
    <div>
      
      <ul className="flex items-center gap-8">
        <li><a  href="" className="font-medium text-gray-700 transition hover:text-green-500">Home</a></li>
        <li><a href="" className="font-medium text-gray-700 transition hover:text-green-500">Feature</a></li>
        <li><a href="/Community" className="font-medium text-gray-700 transition hover:text-green-500">Community</a></li>
        <li><a href="" className="font-medium text-gray-700 transition hover:text-green-500">Blog</a></li>
        <li><a href="" className="font-medium text-gray-700 transition hover:text-green-500">Pricing</a></li>

        <li><a href="" className="rounded-2xl font-medium text-gray-700 transition p-4 bg-green-500 ">regester now</a></li>

  
       

      </ul>
    </div>
    </nav>
 
  )
}
export default Navbar