import React from "react";

const ReactCertificate = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center text-white mb-6">
        React.js Certificate
      </h2>
      <div className="flex justify-center">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://scaler-topics-storage-prod.s3.us-west-2.amazonaws.com/public/topics/images/certificates/69279/thumbnail.png?response-content-disposition=inline%3B%20filename%3D%22certificates-69279-thumbnail.png%22%3B%20filename%2A%3DUTF-8%27%27certificates-69279-thumbnail.png&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIDNNIRGHAQUQRWYA%2F20240924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240924T134507Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=d3cedbf6ef36232943256f10e9b4643e267e46b7f68cbe199179bc18c5dd43d5"
            alt="React.js Certificate"
            className="w-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">
              Certified in React.js
            </h3>
            <p className="text-gray-300 mt-2">
              This certificate demonstrates proficiency in building modern web
              applications using React.js. I have successfully completed
              coursework that covers components, state management, hooks, and
              more.
            </p>
            <p className="text-gray-400 mt-4 text-sm">
              Issued by: [Ayushman Singh]
            </p>
            <p className="text-gray-400 text-sm">Date: [22 September 2024]</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactCertificate;
