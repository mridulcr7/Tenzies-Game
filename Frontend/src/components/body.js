// Body Component
import React from 'react';
import Header from './header';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

function Body() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  function play() {
    navigate("/tenzies");
  }

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Header />

      <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">Hello, {user.name}!</h1>
        <h3 className="text-lg mb-4">Let's play now</h3>
        <button
          onClick={play}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
        >
          Play Game
        </button>
      </div>
    </div>
  );
}

export default Body;
