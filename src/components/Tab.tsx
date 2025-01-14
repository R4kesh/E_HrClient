import React from 'react';

function Tab({ tab, onClose, onClick }) {
  return (
    <div className="flex items-center space-x-2">
      <div
        className="text-teal-600 cursor-pointer"
        onClick={() => onClick(tab.id)}
      >
        {tab.name}
      </div>
      <button
        onClick={() => onClose(tab.id)}
        className="text-red-600 text-xl font-bold hover:bg-gray-200 rounded-full p-1"
      >
        X
      </button>
    </div>
  );
}

export default Tab;
