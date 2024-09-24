import React from "react";
import Code from "./Code";
import ReactCertificate from "./ReactCrificate";

const About = () => {
  return (
    <>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="flex flex-row">
          <span className="inline-flex items-center justify-center p-1 bg-indigo-500 rounded-md shadow-lg">
            <img
              className="h-40 w-40 text-white"
              src="https://res2mzk.netlify.app/img/profile.jpeg"
              alt=""
            />
          </span>
          <div className="mx-5">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
              Devloped by Mohammad Zaid Khan
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              This website was developed as part of my learning process to
              better understand and work with React.js, a popular JavaScript
              library for building user interfaces.
            </p>
          </div>
        </div>
        <ReactCertificate />
      </div>

      <Code />
    </>
  );
};

export default About;
