


import React, { useEffect, useState } from 'react';

const PhysicalActivitySection = ({onChange}) => {
  const [frequency, setFrequency] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');
  const [activityType, setActivityType] = useState<string[]>([]);
  const [nonExerciseActivity, setNonExerciseActivity] = useState('');

 
  useEffect(() => {
    // Send the selected states to the parent component via onChange
    onChange({
      frequency,
      duration,
      intensity,
      activityType,
      nonExerciseActivity,
    });
  }, [frequency, duration, intensity, activityType, nonExerciseActivity, onChange]);

  const handleActivityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value;
    setActivityType((prev) =>
      event.target.checked
        ? [...prev, option]
        : prev.filter((item) => item !== option)
    );
  };

  return (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg shadow-md">
      {/* Frequency */}
      <div>
        <label className="block text-lg font-medium text-black mb-2">
          Frequency: How often do you exercise each week?
        </label>
        <input
          type="text"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          placeholder="e.g., 3 times per week"
          className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:ring-2 focus:outline-none"
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-lg font-medium text-black mb-2">
          Duration: How long do your exercise sessions last?
        </label>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g., 30 minutes"
          className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:ring-2 focus:outline-none"
        />
      </div>

      {/* Intensity */}
      <div>
        <label className="block text-lg font-medium text-black mb-2">
          Intensity: What is the level of intensity?
        </label>
        <select
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:ring-2 focus:outline-none"
        >
          <option value="">Select intensity</option>
          <option value="light">Light</option>
          <option value="moderate">Moderate</option>
          <option value="vigorous">Vigorous</option>
        </select>
      </div>

      {/* Type */}
      <div>
        <label className="block text-lg font-medium text-black mb-2">
          Type: What kinds of activities do you engage in?
        </label>
        <div className="space-y-4">
          {['Walking', 'Running', 'Cycling', 'Swimming', 'Yoga', 'Strength Training', 'Climbing'].map((activity) => (
            <div key={activity} className="flex items-center space-x-3">
              <input
                type="checkbox"
                id={activity}
                value={activity}
                onChange={handleActivityChange}
                className="w-5 h-5 text-teal-500 border-gray-300 rounded-md focus:ring-teal-500 focus:ring-2 transition duration-200"
              />
              <label htmlFor={activity} className="text-lg text-black cursor-pointer">{activity}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Non-Exercise Activity */}
      <div>
        <label className="block text-lg font-medium text-black mb-2">
          Daily Non-Exercise Activity: Activities like walking to work, climbing stairs, or household chores
        </label>
        <textarea
          value={nonExerciseActivity}
          onChange={(e) => setNonExerciseActivity(e.target.value)}
          placeholder="Describe your daily non-exercise activities..."
          className="w-full px-4 py-2 border rounded-md focus:ring-teal-500 focus:ring-2 focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          onClick={() => console.log({ frequency, duration, intensity, activityType, nonExerciseActivity })}
          className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md shadow-lg hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:outline-none transform transition-all hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PhysicalActivitySection;
