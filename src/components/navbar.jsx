import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-neutral-900 p-4 border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">dotshowcase</h1>
        <ul className="flex space-x-6 text-gray-300">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"
              }
            >
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dots"
              className={({ isActive }) =>
                isActive ? "text-white border-b-2 border-blue-500 pb-1" : "hover:text-white"
              }
            >
              Dotfiles
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
