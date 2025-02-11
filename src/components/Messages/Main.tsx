// import React, { useState } from 'react';
// import CompOne from './CompOne';
// import CompTwo from './CompTwo';
// import CompThree from './CompThree';

// const components = [
//   { id: 1, Component: CompOne },
//   { id: 2, Component: CompTwo },
//   { id: 3, Component: CompThree }
// ];

// const Main = () => {
//   const [sortedComponents, setSortedComponents] = useState(components);
//   const [ascending, setAscending] = useState(true);

//   const sortComponents = () => {
//     const sorted = [...sortedComponents].sort((a, b) => ascending ? a.id - b.id : b.id - a.id);
//     setSortedComponents(sorted);
//     setAscending(!ascending);
//   };

//   return (
//     <div>
//       <h1>main</h1>
//       <button onClick={sortComponents} className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4">
//         Sort {ascending ? 'Descending' : 'Ascending'}
//       </button>
//       <div className='grid grid-cols-3 gap-4'>
//         {sortedComponents.map(({ id, Component }) => (
//           <Component key={id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main;

// import React, { useState } from 'react';
// import { Calendar, Clock, Home, Users, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

// const Main = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedView, setSelectedView] = useState('schedule');

//   const practices = [
//     { id: 1, name: 'JONES EAST', appointments: [] },
//     { id: 2, name: 'BABBIT EAST', appointments: [] },
//     { id: 3, name: 'MILLER EAST', appointments: [] },
//     { id: 4, name: 'OSHEA EAST', appointments: [] },
//     { id: 5, name: 'RICHEY', appointments: [] }
//   ];

//   const appointmentStatuses = [
//     { label: 'Coming Up', count: 0, color: 'bg-blue-100' },
//     { label: 'In Office', count: 0, color: 'bg-green-100' },
//     { label: 'Other', count: 0, color: 'bg-gray-100' },
//     { label: 'Checked Out', count: 0, color: 'bg-purple-100' },
//     { label: 'On Wait List', count: 0, color: 'bg-yellow-100' },
//     { label: 'No Show', count: 0, color: 'bg-red-100' }
//   ];

//   const timeSlots = Array.from({ length: 24 }, (_, i) => {
//     const hour = i + 8;
//     if (hour >= 24) return null;
//     return `${hour}:00`;
//   }).filter(Boolean);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-blue-800 text-white p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <input
//               type="text"
//               placeholder="Search for patient"
//               className="px-4 py-2 rounded bg-blue-700 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button className="p-2 hover:bg-blue-700 rounded">
//               <Home className="w-5 h-5" />
//             </button>
//             <button className="p-2 hover:bg-blue-700 rounded">
//               <Users className="w-5 h-5" />
//             </button>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-2">
//               <button className="p-2 hover:bg-blue-700 rounded">
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <span className="font-semibold">
//                 {selectedDate.toLocaleDateString('en-US', { 
//                   weekday: 'short',
//                   month: 'short',
//                   day: 'numeric',
//                   year: 'numeric'
//                 })}
//               </span>
//               <button className="p-2 hover:bg-blue-700 rounded">
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="p-6">
//         {/* Status Cards */}
//         <div className="grid grid-cols-6 gap-4 mb-6">
//           {appointmentStatuses.map((status, index) => (
//             <Card key={index} className={`${status.color}`}>
//               <CardContent className="p-4">
//                 <div className="flex justify-between items-center">
//                   <span className="font-medium">{status.label}</span>
//                   <span className="text-lg font-bold">{status.count}</span>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Schedule Grid */}
//         <div className="grid grid-cols-5 gap-4">
//           {practices.map((practice) => (
//             <Card key={practice.id} className="h-[calc(100vh-250px)] overflow-y-auto">
//               <CardHeader className="sticky top-0 bg-white z-10">
//                 <CardTitle className="text-sm font-medium text-gray-700">
//                   {practice.name}
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-2">
//                 {timeSlots.map((time, index) => (
//                   <div 
//                     key={index}
//                     className="border-b border-gray-200 py-2 px-1 min-h-[60px] relative hover:bg-gray-50 cursor-pointer"
//                   >
//                     <span className="text-xs text-gray-500 absolute -left-1 top-1">
//                       {time}
//                     </span>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useState } from 'react';
import { Calendar, Clock, Home, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedView, setSelectedView] = useState('schedule');

  const practices = [
    { id: 1, name: 'JONES EAST', appointments: [] },
    { id: 2, name: 'BABBIT EAST', appointments: [] },
    { id: 3, name: 'MILLER EAST', appointments: [] },
    { id: 4, name: 'OSHEA EAST', appointments: [] },
    { id: 5, name: 'RICHEY', appointments: [] }
  ];

  const appointmentStatuses = [
    { label: 'Coming Up', count: 0, color: 'bg-blue-100' },
    { label: 'In Office', count: 0, color: 'bg-green-100' },
    { label: 'Other', count: 0, color: 'bg-gray-100' },
    { label: 'Checked Out', count: 0, color: 'bg-purple-100' },
    { label: 'On Wait List', count: 0, color: 'bg-yellow-100' },
    { label: 'No Show', count: 0, color: 'bg-red-100' }
  ];

  const timeSlots = Array.from({ length: 24 }, (_, i) => {
    const hour = i + 8;
    if (hour >= 24) return null;
    return `${hour}:00`;
  }).filter(Boolean);

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
              <Link to="/messages"><Home className="w-5 h-5" /></Link>
            </button>
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
            <div key={index} className={`${status.color} rounded-lg shadow-sm`}>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{status.label}</span>
                  <span className="text-lg font-bold">{status.count}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-5 gap-4">
          {practices.map((practice) => (
            <div key={practice.id} className="bg-white rounded-lg shadow-sm h-[calc(100vh-250px)] overflow-y-auto">
              <div className="sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
                <h3 className="text-sm font-medium text-gray-700">
                  {practice.name}
                </h3>
              </div>
              <div className="p-2">
                {timeSlots.map((time, index) => (
                  <div 
                    key={index}
                    className="border-b border-gray-200 py-2 px-1 min-h-[60px] relative hover:bg-gray-50 cursor-pointer"
                  >
                    <span className="text-xs text-gray-500 absolute -left-1 top-1">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;