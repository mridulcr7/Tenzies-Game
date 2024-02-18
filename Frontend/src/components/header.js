import React from 'react';
import Avatar from "../Utilis/user-avatar.png";
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Header = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">

        <span className="text-white font-serif text-4xl font-extrabold tracking-wide">🎲Tenzies🎲</span>

        <nav className="flex items-center space-x-4 ml-auto">
          {user && (
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <Link to="/leaderboard" className="text-white  text-lg hover:text-gray-300 transition duration-300 font-medium">
                  Leaderboard
                </Link>

                <Link to="/profile" className="text-white text-lg  hover:text-gray-300 transition duration-300 font-medium">
                  {user.name}
                </Link>

                <div className="flex items-center">
                  <img
                    src={Avatar}
                    alt={`${user.name}'s Avatar`}
                    className="w-10 h-10 rounded-full border-4 border-purple-500 ml-2"
                  />
                </div>
              </div>
            </div>
          )}

          {!user && (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-gray-300 transition duration-300 text-lg font-medium"
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="ml-auto">
              <button
                onClick={handleClick}
                className="bg-red-500 text-white text-lg px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition duration-300 font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>

  );
};

export default Header;
