import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
const Movies = ({ handleAddWatchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handelPrevious = () => {
    if (pageNo === 1) {
      setPageNo(1);
      return;
    }
    setPageNo(pageNo - 1);
  };
  const handelNext = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=7c82c3b7144113c80ddd12ae1f1fccf5&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        setMovies(res.data.results);
      });
  }, [pageNo]);

  return (
    <div>
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around m-5 mb-5">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddWatchlist={handleAddWatchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handelNext={handelNext}
        handelPrevious={handelPrevious}
      />
    </div>
  );
};

export default Movies;
// flex flex-row flex-warp justify-around
//https://api.themoviedb.org/3/movie/popular?api_key=7c82c3b7144113c80ddd12ae1f1fccf5&language=en-US&page=1
