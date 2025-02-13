import React,{useState} from 'react'

const NotesForm = ({ onSubmit }) => {

    const [formData, setFormData] = useState({
        provider: '',
        department: '',
        signers: '',
        visit: '',
        templateType: '',
        folder: '',
        date: '',
        timeElapsed: '',
        comment: '',
        status: ''
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
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Provider</label>
        <select
          name="provider"
          value={formData.provider}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Provider</option>
          <option value="SMITH, TRACY, MD">SMITH, TRACY, MD</option>
          <option value="JOHNSON, ALEX, MD">JOHNSON, ALEX, MD</option>
        </select>
      </div>
      {[ 
        { label: 'Department', name: 'department' },
        { label: 'Signers', name: 'signers' },
        { label: 'Visit', name: 'visit' },
        { label: 'Template Type', name: 'templateType' },
        { label: 'Folder', name: 'folder' },
        { label: 'Date', name: 'date', type: 'date' },
        { label: 'Time Elapsed', name: 'timeElapsed' },
        { label: 'Comment', name: 'comment' }
      ].map(field => (
        <div key={field.name} className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Reviewed">Reviewed</option>
        </select>
      </div>
    </div>
    <button
      type="submit"
      className="w-40  bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
    >
      Submit Note
    </button>
  </form>
  )
}

export default NotesForm
