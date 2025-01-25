import React, { useState } from 'react';
import { Calendar, X, Edit2, Search } from 'lucide-react';

const QuickMemo = () => {
  const [memos, setMemos] = useState([]);
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [note, setNote] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && type && note) {
      setMemos([...memos, { id: Date.now(), date, type, note }]);
      // Reset form
      setDate('');
      setType('');
      setNote('');
    }
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter(memo => memo.id !== id));
  };

  const filteredMemos = memos.filter(memo => 
    memo.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    memo.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Quick Memo</h1>
        
        <div className="flex gap-6">
          {/* Left Side - Memo Form */}
          <div className="w-1/3">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-6">
              <form onSubmit={handleSubmit}>
                {/* Date Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Calendar className="absolute right-2 top-2 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Type Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a type</option>
                    <option value="confidential">Confidential</option>
                    <option value="miscellaneous">Miscellaneous</option>
                    <option value="documents">Documents</option>
                    <option value="PM Memos">PM Memos</option>
                    <option value="Display">Display</option>
                    <option value="Hidden">Hidden</option>
                  </select>
                </div>

                {/* Note Field */}
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Note</label>
                  <div className="relative">
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2 text-sm h-32 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your note here..."
                      maxLength={100}
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                      {note.length}/100
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Save Memo
                </button>
              </form>
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
                className="w-full border border-gray-300 rounded-md p-2 pl-10 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Memo Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {filteredMemos.map(memo => (
                <div
                  key={memo.id}
                  className="bg-white rounded-lg shadow-sm border border-blue-100 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-sm font-semibold text-blue-600">{memo.type}</div>
                      <div className="text-xs text-gray-500">{memo.date}</div>
                    </div>
                    <button
                      onClick={() => deleteMemo(memo.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-700 whitespace-pre-wrap">{memo.note}</div>
                  <div className="mt-2 flex justify-end">
                    <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-xs">
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
                <p className="text-gray-500">No memos found. Start by creating a new memo!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickMemo;
