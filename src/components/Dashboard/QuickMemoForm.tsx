import React,{useState} from 'react'

const QuickMemoForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      date: '',
      type: '',
      noteDescription: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Date</label>
            <input
              type="text"
              name="date"
              placeholder="dd-mm-yyyy"
              value={formData.date}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
  
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option value="Display">Display</option>
              <option value="Confidential">Confidential</option>
              <option value="Miscellaneous">Miscellaneous</option>
              <option value="Hidden">Hidden</option>
              <option value="PM Memo">PM Memo</option>
              <option value="Documents">Documents</option>
            </select>
          </div>
  
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Note Description</label>
            <textarea
              name="noteDescription"
              value={formData.noteDescription}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
  
        <button
          type="submit"
          className="w-40 align-middle bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </form>
    );
  };
  

export default QuickMemoForm
