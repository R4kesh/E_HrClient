import React, { useState } from 'react';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';

const Document = () => {
  const [content, setContent] = useState('');

  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 flex flex-col">
      {/* Toolbar */}
      <div className="bg-blue-600 text-white p-4 rounded-t-md flex items-center space-x-4">
        {/* Text Formatting */}
        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
          onClick={() => handleFormat('bold')}
        >
          <Bold size={18} />
        </button>
        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
          onClick={() => handleFormat('italic')}
        >
          <Italic size={18} />
        </button>
        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
          onClick={() => handleFormat('underline')}
        >
          <Underline size={18} />
        </button>

        {/* Alignment */}
        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
          onClick={() => handleFormat('justifyLeft')}
        >
          <AlignLeft size={18} />
        </button>
        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
          onClick={() => handleFormat('justifyCenter')}
        >
          <AlignCenter size={18} />
        </button>
        <button
          className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md"
          onClick={() => handleFormat('justifyRight')}
        >
          <AlignRight size={18} />
        </button>

        {/* Dropdowns */}
        <select
          className="p-2 rounded-md bg-white text-black focus:outline-none"
          onChange={(e) => handleFormat('fontName', e.target.value)}
        >
          <option value="">Default Font</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <select
          className="p-2 rounded-md bg-white text-black focus:outline-none"
          onChange={(e) => handleFormat('fontSize', e.target.value)}
        >
          <option value="">Size</option>
          <option value="1">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
        </select>
      </div>

      {/* Editable Workspace */}
      <div
        className="bg-white border p-4 rounded-b-md mt-4 shadow-md flex-1 overflow-y-auto"
        contentEditable
        onInput={(e) => setContent(e.currentTarget.innerHTML)}
      ></div>

      {/* Display Content (for debugging or output purposes) */}
      <div className="bg-gray-200 p-4 rounded-md mt-4">
        <h2 className="text-lg font-semibold mb-2">Output:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default Document;
