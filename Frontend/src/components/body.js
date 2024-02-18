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
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("j8.jpg")' }}>
      <Header />

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-screen bg-opacity-75">
        <div className="lg:w-1/2 lg:pr-8 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold mb-2 mt-100 text-white ml-[250px] mt-[100px]">
              Welcome, {user.name}!
            </h1>
            <h3 className="text-lg mb-6 text-white  ml-[250px]">
              Get ready for an exciting gaming experience.
            </h3>
            <button
              onClick={play}
              className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-blue ml-[250px]"
            >

              Play Game
            </button>
          </div>
        </div>

        <div className="lg:w-1/3 lg:h-200 flex flex-col items-center justify-center">
          <div className="relative aspect-w-16 aspect-h-14 mb-4  mt-[130px] ml-[200px]">
            <iframe
              width="350"
              height="255"
              src="t3.mp4?autoplay=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-white text-center">
            <p className="text-[20px] ml-[200px]">Demo</p>
          </div>
        </div>
      </div>
    </div>
  );



}

export default Body;
