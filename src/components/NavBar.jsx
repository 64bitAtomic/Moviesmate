import React from "react";
import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex flex-warp border space-x-8 items-center pl-3 py-4 bg-gray-700">
      <img className="w-[50px]" src={Logo} alt="" />
      <Link to="/" className=" text-blue-500 text-3xl font-bold">
        {" "}
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-400 text-3xl font-bold">
        Watchlist
      </Link>
      <Link to="/about" className="text-blue-400 text-3xl font-bold">
        About
      </Link>
    </div>
  );
};

export default NavBar;
