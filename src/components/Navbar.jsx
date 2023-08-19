import React, { useContext } from 'react';
import themeContext from '../context/theme/themeContext';

const Navbar = ({ title }) => {
  
  const { theme } = useContext(themeContext);

  // Define a CSS class and background color based on the theme value
  const navbarClass = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-blue-500 text-white';

  return (
    <nav className={`p-4 ${navbarClass}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">{title}</div>
          <ul className="flex space-x-4">
            <li><a className="hover:text-gray-300" href="#">Sample Link</a></li>
            <li><a className="hover:text-gray-300" href="#">Sample Link 2</a></li>
            <li><a className="hover:text-gray-300" href="#">Sample Link 3</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;