import React from "react";

const MovieCard = ({ movieObj, poster_path, name, handleAddWatchlist }) => {
  return (
    <div
      className="my-2 h-[70vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300  hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w200/${poster_path})`,
      }}
    >
      <div
        onClick={() => {
          handleAddWatchlist(movieObj);
        }}
        className="m-4  flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
      >
        &#10133;
      </div>
      <div className="text-white text-xl w-full p-2 rounded-xl text-center bg-gray-900/60">
        {name}
      </div>
    </div>
  );
};

export default MovieCard;
// h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300  hover:cursor-pointer flex flex-row justify-between items-end
