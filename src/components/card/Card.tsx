import React from "react";

const Card = ({ title, content, provided, innerRef }) => (
  <div
    ref={innerRef}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-4 border-transparent hover:border-blue-400 hover:rounded-xl"
  >
    <h4 className="font-semibold text-lg">{title}</h4>
    <p>{content}</p>
  </div>
);

export default Card;
