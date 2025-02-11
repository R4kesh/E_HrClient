import React,{useState} from 'react'

const VitalForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
      weight: '',
      previousWeight: '',
      weightChange: '',
      height: '',
      bmi: '',
      pulse: '',
      temperature: '',
      respirationRate: '',
      oxygenSaturation: '',
      oxygenSupplement: '',
      systolicBP: '',
      diastolicBP: '',
      bpLocation: ''
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
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Weight (kg)', name: 'weight' },
            { label: 'Previous Weight (kg)', name: 'previousWeight' },
            { label: 'Weight Change (kg)', name: 'weightChange' },
            { label: 'Height (cm)', name: 'height' },
            { label: 'BMI', name: 'bmi' },
            { label: 'Pulse (bpm)', name: 'pulse' },
            { label: 'Temperature (°C)', name: 'temperature' },
            { label: 'Respiration Rate (breaths/min)', name: 'respirationRate' },
            { label: 'Oxygen Saturation (%)', name: 'oxygenSaturation' },
            { label: 'Oxygen Supplement', name: 'oxygenSupplement' },
            { label: 'Systolic BP (mmHg)', name: 'systolicBP' },
            { label: 'Diastolic BP (mmHg)', name: 'diastolicBP' },
            { label: 'BP Measurement Location', name: 'bpLocation' }
          ].map(field => (
            <div key={field.name} className="flex flex-col">
              <label className="text-sm text-gray-600 mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="w-40 align-middle bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition-colors"
        >
          Submit Vitals
        </button>
      </form>
    );
  };

export default VitalForm
