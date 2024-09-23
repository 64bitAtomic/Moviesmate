import React, { useState, useEffect } from "react";

const Banner = () => {
  const movieName = [
    "Avenegrs Endgame",
    "The Batman",
    "Kung Fu Panda 4",
    "Deadpool & Wolverine",
  ];
  const images = [
    "https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg", // Add paths to your images here
    "https://i.pinimg.com/474x/49/70/b9/4970b90fe80072bdfeca05a355b858da.jpg",
    "https://i.pinimg.com/474x/af/16/b4/af16b444d0868297483994d359c70da4.jpg",
    "https://i.pinimg.com/736x/29/74/73/2974730eccc76593ae2f11cc84222545.jpg",
  ];

  const [img, setImg] = useState(0);
  const [movieNameIndex, setMovieNameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImg((prevImg) => (prevImg === images.length - 1 ? 0 : prevImg + 1));
      setMovieNameIndex((prevImg) =>
        prevImg === movieName.length - 1 ? 0 : prevImg + 1
      );
    }, 3000); // Change image every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length, movieName.length]);

  return (
    <div
      className="h-[50vh] md:h-[75vh] bg-cover bg-center flex flex-wrap items-end rounded-xl"
      style={{
        backgroundImage: `url(${images[img]})`,
        transition: "background-image 1s ease-in-out", // Add smooth transition effect
      }}
    >
      <div className="w-full p-4 text-white text-2xl text-center bg-gray-900/60">
        {movieName[movieNameIndex]}
      </div>
    </div>
  );
};

export default Banner;
