
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../providers/AppProvider";

function Navbar({ search, setSearch }) {
  const { username } = useContext(AppContext);

  const linkStyle = ({ isActive }) =>
    `transition hover:text-green-800 ${
      isActive ? "font-semibold text-green-800" : "text-gray-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 px-4 py-3 backdrop-blur sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <Link
          to="/"
          className="text-xl font-bold tracking-wide text-gray-900"
        >
          ♡ crystal.
        </Link>

        <ul className="flex flex-wrap items-center gap-4 text-xs sm:gap-6 sm:text-sm">
          <li>
            <NavLink to="/" end className={linkStyle}>
              SHOP
            </NavLink>
          </li>

          <li>
            <NavLink to="/home" className={linkStyle}>
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkStyle}>
              COLLECTIONS
            </NavLink>
          </li>

          <li>
            <NavLink to="/Contact" className={linkStyle}>
              CONTACT
            </NavLink>
          </li>

          <li className="text-gray-500">{username || "Welcome"}</li>
        </ul>

        <div className="flex min-w-0 flex-1 items-center gap-2 sm:max-w-xs">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="min-w-0 flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
          />

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
            >
              Clear
            </button>
          )}
        </div>

        <Link
          to="/"
          className="rounded-lg bg-green-800 px-4 py-3 text-xs font-medium text-white transition hover:bg-green-900 sm:text-sm"
        >
          VIEW PRODUCTS
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
