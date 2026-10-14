import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext }from "../providers/AppProvider"

function Navbar() {
  const { username } = useContext(AppContext);

  return (
    <nav className="flex items-center justify-between bg-sky-400 px-5 py-4 text-white">
      <h2 className="text-2xl font-bold">{username}</h2>

      <ul className="flex items-center gap-6">
        <li>
          <Link to="/" className="transition hover:text-sky-700">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="transition hover:text-sky-700">
            About
          </Link>
        </li>

  
        <li>
          <Link to="/Contact" className="transition hover:text-sky-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;