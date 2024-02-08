import React from 'react';
import mainLogo from "../Utilis/unnamed.png";
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
    <header className="bg-[#30727d] fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
       
        <span className="text-[#85c1ce] font-serif text-[28px] font-semibold">🎲Tenzies🎲</span>
      
        <nav className="flex items-center space-x-4 flex-grow">
          {user && (
            <div className="flex items-center space-x-4 flex-grow">
              <Link to="/leaderboard" className="text-[#e6eced]  text-[28px] hover:text-gray-500 transition duration-300 ml-[300px] mr-[300px]">
               Leaderboard
              </Link>

              <Link to="/profile" className="text-[#e1e5e6]  text-[28px]  hover:text-gray-500 transition duration-300 ">
                Profile
              </Link>
              
              <div className="flex items-center">
              <img
                src={Avatar}
                //alt={`${user.name}'s Avatar`}
                className="w-8 h-8 rounded-full border-2 border-purple-500 mr-2"
              />
            </div>

              {user.avatar && (
                <div className="flex flex-col items-center">
                  <img
                    src={user.avatar}
                    alt={`${user.name}'s Avatar`}
                    className="w-8 h-8 rounded-full border-2 border-purple-500 mb-2"
                  />
                  <span className="text-purple-500 font-bold">{user.name}</span>
                </div>
              )}
            </div>
          )}
          {!user && (
            <div className="flex items-center">
              <Link
                to="/login"
                className="text-white hover:text-gray-300 transition duration-300 mr-4"
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
            <button
              onClick={handleClick}
              className="bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-red transition duration-300 ml-auto"
            >
              Logout
            </button>
          )}
        </nav>


      </div>
    </header>
  );
};

export default Header;

