import React from "react";

const CardPreview = ({ title, children }) => {
  return (
    <div className="bg-white w-full max-w-md mx-auto min-h-40 max-h-40 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 overflow-hidden flex flex-col">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <div className="text-sm text-gray-600 overflow-hidden flex-grow">
        <div className="truncate max-h-full">{children}</div>
      </div>
      <button className="mt-2 text-blue-500 hover:underline text-sm self-end">
        Read More
      </button>
    </div>
  );
};

export default CardPreview;
