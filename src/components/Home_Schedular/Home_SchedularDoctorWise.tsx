import React, { useState } from 'react';
import { Home, Users, ChevronLeft, ChevronRight, Calendar, Monitor, Minimize2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home_SchedularDoctorWise() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const appointmentStatuses = [
    { label: 'Coming Up', count: 0, color: 'bg-blue-100' },
    { label: 'In Office', count: 0, color: 'bg-green-100' },
    { label: 'Other', count: 0, color: 'bg-gray-100' },
    { label: 'Checked Out', count: 0, color: 'bg-purple-100' },
    { label: 'On Wait List', count: 0, color: 'bg-yellow-100' },
    { label: 'No Show', count: 0, color: 'bg-red-100' }
  ];

  const timeSlots = Array.from({ length: 12 }, (_, i) => {
    const hour = i + 7; // Starting from 7 AM
    return {
      hour: hour % 12 || 12,
      meridiem: hour < 12 ? 'AM' : 'PM',
      slots: [':00', ':15', ':30', ':45']
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-800 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search for patient"
              className="px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 hover:bg-blue-700 rounded">
            <Link to="/messages"><Home className="w-5 h-5" /></Link>            </button>
            <button className="p-2 hover:bg-blue-700 rounded">
              <Link to='/doctorsappoinments'><Users className="w-5 h-5" /></Link>
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-blue-700 rounded">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-semibold">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <button className="p-2 hover:bg-blue-700 rounded">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6">
        {/* Status Cards */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          {appointmentStatuses.map((status, index) => (
            <div 
              key={index} 
              className={`${status.color} rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{status.label}</span>
                  <span className="text-lg font-bold">{status.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointments Schedule */}
        <div className="bg-white rounded-lg shadow">
          {/* Time slots container */}
          <div className="divide-y divide-gray-200">
            {timeSlots.map((time, idx) => (
              <div key={idx} className="relative">
                {/* Time indicator */}
                <div className="absolute left-0 w-20 py-3 px-4 text-sm font-medium text-gray-500">
                  {`${time.hour}:00 ${time.meridiem}`}
                </div>
                {/* Appointment slots */}
                <div className="ml-20 grid grid-cols-4 divide-x divide-gray-100">
                  {time.slots.map((slot, slotIdx) => (
                    <div
                      key={slotIdx}
                      className="h-16 p-1 hover:bg-blue-50 transition-colors duration-150"
                    >
                      <div className="text-xs text-gray-400">
                        {`${time.hour}${slot} ${time.meridiem}`}
                      </div>
                      {/* Appointment placeholder - can be replaced with actual appointments */}
                      {slotIdx === 1 && idx === 2 && (
                        <div className="mt-1 p-1 bg-blue-100 rounded text-xs">
                          <div className="font-medium">John Doe</div>
                          <div className="text-gray-500">Check-up</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_SchedularDoctorWise;