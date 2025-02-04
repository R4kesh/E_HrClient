
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FaUserMd,
  FaSignature,
  FaFolder,
  FaCommentDots,
} from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";

export default function Notes() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const { addTab } = useTabs();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/notes.json`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching notes data:", error);
      });
  }, []);

  useEffect(() => {

    addTab({ id:"/notes", name:"Notes", path:`/notes/${id}` });
  
}, [ id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center  ">
      <div className="bg-white w-full  p-8 rounded-lg shadow-lg transition-all duration-300">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#002D62]">Note Section</h2>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Provider */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-[#1c4b85]">
              <FaUserMd className="text-blue-500" />
              <span>Provider</span>
            </label>
            <select
              className="w-full mt-2 p-3 text-[#3972c7] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={data.defaultValues.provider}
            >
              {data.providers.map((provider, idx) => (
                <option key={idx}>{provider}</option>
              ))}
            </select>
          </div>

          {/* Department */}
          <div>
            <label className="text-sm font-semibold text-[#1c4b85]">Department</label>
            <input
              type="text"
              value={data.defaultValues.department}
              className="w-full mt-2 p-3 text-[#3972c7] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Signers */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-[#1c4b85]">
              <FaSignature className="text-green-500" />
              <span>Signers</span>
            </label>
            <input
              type="text"
              placeholder="Add signers here"
              className="w-full mt-2 p-3 placeholder-[#6786b4] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Visit */}
          <div>
            <label className="text-sm font-semibold text-[#1c4b85]">Visit</label>
            <input
              type="text"
              value={data.defaultValues.visit}
              className="w-full text-[#3972c7] mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Template Type Dropdown */}
          <div>
            <label className="text-sm font-semibold text-[#1c4b85]">Template Type</label>
            <select
              className="w-full mt-2 p-3 text-[#3972c7] border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={data.templateTypes[0]}
            >
              {data.templateTypes.map((type, idx) => (
                <option key={idx}>{type}</option>
              ))}
            </select>
          </div>

          {/* Folder */}
          <div>
            <label className="flex items-center space-x-2 text-sm font-semibold text-[#1c4b85]">
              <FaFolder className="text-yellow-500" />
              <span>Folder</span>
            </label>
            <input
              type="text"
              value={data.defaultValues.folder}
              className="w-full text-[#3972c7] mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-semibold text-[#1c4b85]">Date</label>
            <input
              type="datetime-local"
              value={data.defaultValues.date}
              className="w-full text-[#3972c7] mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Time Elapsed */}
          <div>
            <label className="text-sm font-semibold text-[#1c4b85]">Time Elapsed</label>
            <input
              type="text"
              value={data.defaultValues.timeElapsed}
              className="w-full text-[#3972c7] mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Comment */}
          <div className="col-span-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-[#1c4b85]">
              <FaCommentDots className="text-red-500" />
              <span>Comment</span>
            </label>
            <textarea
              rows="3"
              placeholder="Add your comment here"
              className="w-full placeholder-[#6786b4] mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-semibold text-[#1c4b85]">Status</label>
            <select
              className="w-full text-[#3972c7] mt-2 p-3 border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue={data.statuses[0]}
            >
              {data.statuses.map((status, idx) => (
                <option key={idx}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-end space-x-4 mt-8">
          <button className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
