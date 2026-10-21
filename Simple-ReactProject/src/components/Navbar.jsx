import logo from "../assets/images/icons/Logo (7).svg"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-100 bg-white/95 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" aria-label="Home" className="shrink-0">
          <img src={logo} alt="My logo" className="h-10 w-auto" />
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 sm:px-4" to="/">Home</Link>
          <Link className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 sm:px-4" to="/Features">Features</Link>
          <Link className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 sm:px-4" to="/Community">Community</Link>
          <Link className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 sm:px-4" to="/Blog">Blog</Link>
          <Link className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 sm:px-4" to="/Pricing">Pricing</Link>
          <Link className="ml-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600" to="/Register">Register</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
