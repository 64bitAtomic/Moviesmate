import React from "react";

const Pagination = ({ pageNo, handelNext, handelPrevious }) => {
  return (
    <div className="bg-gray-400 p-4 mt-8 flex justify-center">
      <div onClick={handelPrevious} className="px-8 ">
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handelNext} className="px-8 ">
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
