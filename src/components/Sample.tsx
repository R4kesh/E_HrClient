// import React, { useState } from 'react';

// const Allergies = () => {
//   const [showMoreHelpfulLinks, setShowMoreHelpfulLinks] = useState(false);
//   const [showMoreApps, setShowMoreApps] = useState(false);

//   const cards = [
//     { id: 1, title: 'Account settings', icon: '⚙️' },
//     { id: 2, title: 'Atlassian Support', icon: '❓' },
//     { id: 3, title: 'Atlassian Community', icon: '👥' },
//     { id: 4, title: 'Self-managed licensing', icon: '📄' },
//     { id: 5, title: 'Atlassian Documentation', icon: '📘' },
//     { id: 6, title: 'Try Atlassian products', icon: '🧪' },
//     { id: 7, title: 'Advanced Settings', icon: '🔧' },
//     { id: 8, title: 'User Management', icon: '👤' },
//   ];

//   const apps = [
//     { id: 1, title: 'Jira Product Discovery', icon: '🧩' },
//     { id: 2, title: 'Jira', icon: '📊' },
//     { id: 3, title: 'Confluence', icon: '📖' },
//     { id: 4, title: 'Jira Service Management', icon: '🛠️' },
//     { id: 5, title: 'Compass', icon: '🧭' },
//     { id: 6, title: 'Bitbucket', icon: '🔗' },
//     { id: 7, title: 'Opsgenie', icon: '🚨' },
//     { id: 8, title: 'Statuspage', icon: '📋' },
//   ];

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold mb-4">G'day, Rakesh S</h1>

//       {/* Helpful Links Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-4">Helpful links</h2>
//         <div className="grid grid-cols-6 gap-4">
//           {cards.slice(0, showMoreHelpfulLinks ? cards.length : 6).map((card) => (
//             <div
//               key={card.id}
//               className="p-4 bg-white border rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition-colors"
//             >
//               <div className="text-4xl mb-2">{card.icon}</div>
//               <div className="text-sm font-medium text-center">{card.title}</div>
//             </div>
//           ))}
//         </div>
//         {cards.length > 6 && (
//           <button
//             onClick={() => setShowMoreHelpfulLinks(!showMoreHelpfulLinks)}
//             className="mt-4 text-blue-500 hover:underline"
//           >
//             {showMoreHelpfulLinks ? 'Show Less' : 'Show More'}
//           </button>
//         )}
//       </div>

//       {/* Our Apps Section */}
//       <div>
//         <h2 className="text-xl font-semibold mb-4">Our apps</h2>
//         <div className="grid grid-cols-6 gap-4">
//           {apps.slice(0, showMoreApps ? apps.length : 6).map((app) => (
//             <div
//               key={app.id}
//               className="p-4 bg-white border rounded-md shadow-md hover:shadow-lg hover:bg-gray-100 transition-colors"
//             >
//               <div className="text-4xl mb-2">{app.icon}</div>
//               <div className="text-sm font-medium text-center">{app.title}</div>
//             </div>
//           ))}
//         </div>
//         {apps.length > 6 && (
//           <button
//             onClick={() => setShowMoreApps(!showMoreApps)}
//             className="mt-4 text-blue-500 hover:underline"
//           >
//             {showMoreApps ? 'Show Less' : 'Show More'}
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Allergies;

import React, { useState } from 'react';
import { ChevronDown, Settings, HelpCircle, Users, FileText, Layout, Box, Zap, Compass, GitBranch } from 'lucide-react';

const Sample = () => {
  const [isHelpfulExpanded, setIsHelpfulExpanded] = useState(false);
  const [isAppsExpanded, setIsAppsExpanded] = useState(false);

  const helpfulLinks = [
    { icon: <Settings size={24} />, title: 'Account settings' },
    { icon: <HelpCircle size={24} />, title: 'Atlassian Support' },
    { icon: <Users size={24} />, title: 'Atlassian Community' },
    { icon: <FileText size={24} />, title: 'Self-managed licensing' },
    { icon: <Layout size={24} />, title: 'Atlassian Documentation' },
    { icon: <Layout size={24} />, title: 'Try Atlassian products' },
    { icon: <Settings size={24} />, title: 'Security Settings' },
    { icon: <HelpCircle size={24} />, title: 'Training Resources' },
    { icon: <Users size={24} />, title: 'Partner Network' },
    { icon: <FileText size={24} />, title: 'API Documentation' },
    { icon: <Layout size={24} />, title: 'Release Notes' },
    { icon: <Layout size={24} />, title: 'Developer Portal' },
  ];

  const apps = [
    { icon: <Box size={24} />, title: 'Jira Product Discovery', action: 'TRY' },
    { icon: <Box size={24} />, title: 'Jira', action: 'TRY' },
    { icon: <Layout size={24} />, title: 'Confluence', action: 'TRY' },
    { icon: <Zap size={24} />, title: 'Jira Service Management', action: 'TRY' },
    { icon: <Compass size={24} />, title: 'Compass', action: 'TRY' },
    { icon: <GitBranch size={24} />, title: 'Bitbucket', action: 'TRY' },
    { icon: <Box size={24} />, title: 'Trello', action: 'TRY' },
    { icon: <Layout size={24} />, title: 'Statuspage', action: 'TRY' },
    { icon: <Zap size={24} />, title: 'Opsgenie', action: 'TRY' },
    { icon: <Compass size={24} />, title: 'Bamboo', action: 'TRY' },
    { icon: <GitBranch size={24} />, title: 'Sourcetree', action: 'TRY' },
    { icon: <Box size={24} />, title: 'Crucible', action: 'TRY' },
  ];

  const displayHelpfulLinks = isHelpfulExpanded ? helpfulLinks : helpfulLinks.slice(0, 6);
  const displayApps = isAppsExpanded ? apps : apps.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">G'day, Sample</h1>

        {/* Helpful Links Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Helpful links</h2>
            <button
              onClick={() => setIsHelpfulExpanded(!isHelpfulExpanded)}
              className="flex items-center text-blue-600 hover:text-blue-700 gap-1"
            >
              {isHelpfulExpanded ? 'Show less' : 'Show more'}
              <ChevronDown className={`transform transition-transform duration-200 ${isHelpfulExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-6 gap-4">
  {displayHelpfulLinks.map((link, index) => (
    <div 
      key={index} 
      className="bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer aspect-square flex flex-col"
    >
      <div className="flex-1 flex items-center justify-center p-4 bg-gray-200 rounded-t-lg border-b border-white">
        <div className="text-gray-600">{link.icon}</div>
      </div>
      <div className="bg-gray-50 p-3 rounded-b-lg">
        <h3 className="text-gray-800 font-medium text-sm text-center truncate">
          {link.title}
        </h3>
      </div>
    </div>
  ))}
</div>


        </div>

        {/* Our Apps Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">Our apps</h2>
            <button
              onClick={() => setIsAppsExpanded(!isAppsExpanded)}
              className="flex items-center text-blue-600 hover:text-blue-700 gap-1"
            >
              {isAppsExpanded ? 'Show less' : 'Show more'}
              <ChevronDown className={`transform transition-transform duration-200 ${isAppsExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <div className="grid grid-cols-6 gap-4">
            {displayApps.map((app, index) => (
              <div 
                key={index} 
                className="bg-gray-200 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 aspect-square flex flex-col"
              >
                <div className="flex-1 flex items-center justify-center p-4">
                  <div className="bg-blue-500 text-white p-3 rounded-lg">
                    {app.icon}
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded-b-lg flex justify-between items-center">
                  <h3 className="text-gray-800 font-medium text-sm truncate">
                    {app.title}
                  </h3>
                  <span className="text-blue-600 text-xs font-semibold">
                    {app.action}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
