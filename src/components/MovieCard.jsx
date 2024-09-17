import React from "react";

const MovieCard = () => {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300  hover:cursor-pointer flex flex-col justify-between items-center"
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/I/61S+YHHA6xL._AC_UF1000,1000_QL80_.jpg)`,
      }}
    >
      MovieCard
    </div>
  );
};

export default MovieCard;
