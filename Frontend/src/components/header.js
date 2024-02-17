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
       
        <span className="text-white font-serif text-2xl font-semibold">🎲Tenzies🎲</span>

        <nav className="flex items-center space-x-4 ml-auto">
          {user && (
            <div className="flex items-center space-x-4">
              <Link to="/leaderboard" className="text-white text-sm hover:text-gray-300 transition duration-300">
                Leaderboard
              </Link>

              <Link to="/profile" className="text-white text-sm hover:text-gray-300 transition duration-300">
                {user.name}
              </Link>

              <div className="flex items-center">
                <img
                  src={Avatar}
                  alt={`${user.name}'s Avatar`}
                  className="w-8 h-8 rounded-full border-2 border-purple-500 ml-2"
                />
              </div>
            </div>
          )}

          {!user && (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Register
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center space-x-4">
              <button
                onClick={handleClick}
                className="bg-red-500 text-white text-sm px-3 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition duration-300"
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
