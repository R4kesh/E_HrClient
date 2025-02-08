import React,{useState} from 'react'

const ProblemForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        reviewed: false,
        noKnownProblems: false,
        onsetDate: '',
        encounterDate: '',
        status: '',
        endDate: '',
        problem: '',
        comment: ''
      });
    
      const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: type === 'checkbox' ? checked : value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };
      return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="reviewed"
                checked={formData.reviewed}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-600">Reviewed</label>
            </div>
    
            <div className="flex items-center">
              <input
                type="checkbox"
                name="noKnownProblems"
                checked={formData.noKnownProblems}
                onChange={handleChange}
                className="mr-2"
              />
              <label className="text-sm text-gray-600">No Known Problems</label>
            </div>
    
            {[ 
              { label: 'Onset Date', name: 'onsetDate', type: 'date' },
              { label: 'Encounter Date', name: 'encounterDate', type: 'date' },
              { label: 'Status', name: 'status' },
              { label: 'End Date', name: 'endDate', type: 'date' }
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
              <label className="text-sm text-gray-600 mb-1">Problem</label>
              <select
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Problem</option>
                <option value="diabetic">Diabetic</option>
                <option value="allergy">Allergy</option>
                <option value="hypertension">Hypertension</option>
              </select>
            </div>
    
            <div className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">Comment</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
    
          <button
            type="submit"
            className="w-40 align-middle bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
          >
            Submit Problem
          </button>
        </form>
      );
}

export default ProblemForm
