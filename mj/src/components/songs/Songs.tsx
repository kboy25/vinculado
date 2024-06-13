import React from "react";
import "./Songs.css";

const Songs: React.FC = () => {
  return (
    <>
      <div className="songs-title">
        <div className="songs-title-content">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-5xl lg:text-6xl">
            Hi
            <span className="dark:pink-blue-500 text-pink-600"> Love </span>
            thank you sa pag share ani
          </h1>
          <p className="mb-3 text-gray-500 dark:text-gray-400 lg:text-xl">
            You are in love with this music because it touches your spirit and
            talks to your heart. It's a tune that captures your grace, beauty,
            and all the things that make you unique; it's more than simply
            music. Every word in the song, every note, is a representation of
            the amazing person you are.
          </p>
          <p className="text-gray-500 dark:text-gray-400 lg:text-xl">
            This song makes me think of our times together, our shared laughs,
            and our ever-deepening love. It brightens my life and makes me
            happy, just like it does for you.
          </p>
        </div>
      </div>
      <div className="songs">
        <div className="song-content">
          <h1 className="text-2xl font-extrabold leading-none tracking-tight text-gray-600 dark:text-white md:text-2xl lg:text-3xl">
            <span className="dark:pink-blue-500 text-pink-600">Dandelions</span>
          </h1>
          <iframe className="vid"
            src="https://www.youtube.com/embed/ZAC_k1HUyE4"
            title="Austin Mahone - All I Ever Need (Official Music Video)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-gray-500 dark:text-gray-400 lg:text-xl">
          Dili nako ma butang tanan video huhuhu dili ka daog sa host
        </p>
      </div>
    </>
  );
};

export default Songs;
