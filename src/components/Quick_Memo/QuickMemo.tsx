


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Calendar, X, Edit2, Search } from "lucide-react";
import { useParams } from "react-router-dom";
import { useTabs } from "../../Context/TabProvider";

const QuickMemo = () => {
  const { id } = useParams();
  const { addTab } = useTabs();
  const [memos, setMemos] = useState([]);
  const [formFields, setFormFields] = useState(null); // Initialize as null
  const [formData, setFormData] = useState({ date: "", type: "", note: "" });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch form configuration
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/assets/json/quickmemo.json`)
      .then((response) => {
        setFormFields(response.data.fields);
      })
      .catch((error) => {
        console.error("Error fetching form configuration:", error);
      });
  }, []);

  useEffect(() => {

    addTab({ id: "/quickMemo", name: "Quick Memo", path:`/quickMemo/${id}` });
  
}, [ id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.date && formData.type && formData.note) {
      setMemos([...memos, { id: Date.now(), ...formData }]);
      setFormData({ date: "", type: "", note: "" });
    }
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  const filteredMemos = memos.filter(
    (memo) =>
      memo.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memo.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-[#002D62] mb-6">Quick Memo</h1>

        <div className="flex gap-6">
          {/* Left Side - Memo Form */}
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-6">
              {/* Check if formFields is loaded */}
              {formFields ? (
                <form onSubmit={handleSubmit}>
                  {/* Date Field */}
                  {formFields.date && (
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#1c4b85] mb-1">
                        {formFields.date.label}
                      </label>
                      <div className="relative">
                        <input
                          type={formFields.date.type}
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          placeholder={formFields.date.placeholder}
                          className="w-full border text-[#3972c7] border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {/* <Calendar className="absolute right-2 top-2 w-4 h-4 text-gray-400" /> */}
                      </div>
                    </div>
                  )}

                  {/* Type Field */}
                  {formFields.type && (
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#1c4b85] mb-1">
                        {formFields.type.label}
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        className="w-full border text-[#3972c7] border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select a type</option>
                        {formFields.type.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Note Field */}
                  {formFields.note && (
                    <div className="mb-4">
                      <label className="block text-sm font-semibold text-[#1c4b85] mb-1">
                        {formFields.note.label}
                      </label>
                      <div className="relative">
                        <textarea
                          name="note"
                          value={formData.note}
                          onChange={handleInputChange}
                          placeholder={formFields.note.placeholder}
                          maxLength={formFields.note.maxLength}
                          className="w-full border border-gray-300 placeholder-[#6786b4] rounded-md p-2 text-sm h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                          {formData.note.length}/{formFields.note.maxLength}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full  text-white rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Save Memo
                  </button>
                </form>
              ) : (
                <p className="text-center text-gray-500">Loading form...</p>
              )}
            </div>
          </div>

          {/* Right Side - Memo List */}
          <div className="w-2/3">
            {/* Search Bar */}
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search memos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-gray-300  placeholder-[#6786b4] rounded-md p-2 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Memo Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {filteredMemos.map((memo) => (
                <div
                  key={memo.id}
                  className="bg-white rounded-lg shadow-sm border border-blue-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-sm font-semibold text-[#1c4b85]">
                        {memo.type}
                      </div>
                      <div className="text-xs text-gray-500">{memo.date}</div>
                    </div>
                    <button
                      onClick={() => deleteMemo(memo.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 whitespace-pre-wrap">
                    {memo.note}
                  </div>
                  <div className="mt-2 flex justify-end">
                    <button className="text-[#3972c7] hover:text-[#1c4b85] flex items-center gap-1 text-xs">
                      <Edit2 className="w-3 h-3" />
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredMemos.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500">
                  No memos found. Start by creating a new memo!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickMemo;
