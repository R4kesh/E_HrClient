// import React from 'react';
// import { Calendar, User, FileText, Clock, Users, MessageSquare, AlertCircle, Building, CreditCard, ChevronDown, Plus, Shield } from 'lucide-react';

// // Custom Card Components
// const Card = ({ children, className = '' }) => (
//   <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
//     {children}
//   </div>
// );

// const CardHeader = ({ children, className = '' }) => (
//   <div className={`px-6 py-4 ${className}`}>
//     {children}
//   </div>
// );

// const CardTitle = ({ children, className = '' }) => (
//   <h2 className={`text-xl font-semibold ${className}`}>
//     {children}
//   </h2>
// );

// const CardContent = ({ children, className = '' }) => (
//   <div className={`px-6 py-4 ${className}`}>
//     {children}
//   </div>
// );

// const LabOrderContent = () => {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <Card className="max-w-5xl mx-auto">
//         <CardHeader className="bg-blue-600">
//           <CardTitle className="text-white flex items-center gap-2">
//             <FileText className="h-6 w-6" />
//             Lab Order Form
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <FileText className="h-4 w-4 text-blue-600" />
//                     Order #
//                   </div>
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <User className="h-4 w-4 text-blue-600" />
//                     Provider
//                   </div>
//                 </label>
//                 <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>SMITH, TRACY MD</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <Users className="h-4 w-4 text-blue-600" />
//                     Signers
//                   </div>
//                 </label>
//                 <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>Select Signers</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <Building className="h-4 w-4 text-blue-600" />
//                     Folder
//                   </div>
//                 </label>
//                 <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>Orders</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="h-4 w-4 text-blue-600" />
//                     Order Date
//                   </div>
//                 </label>
//                 <input
//                   type="date"
//                   defaultValue="2025-01-17"
//                   className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Bill To:</label>
//                 <div className="flex gap-4">
//                   <label className="flex items-center">
//                     <input type="radio" name="billTo" value="provider" className="mr-2" />
//                     Provider
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="billTo" value="insurance" className="mr-2" defaultChecked />
//                     Insurance
//                   </label>
//                   <label className="flex items-center">
//                     <input type="radio" name="billTo" value="patient" className="mr-2" />
//                     Patient
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <Building className="h-4 w-4 text-blue-600" />
//                     Department
//                   </div>
//                 </label>
//                 <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>Select Department</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <Building className="h-4 w-4 text-blue-600" />
//                     Facility
//                   </div>
//                 </label>
//                 <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>Select Facility</option>
//                 </select>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     <div className="flex items-center gap-2">
//                       <Shield className="h-4 w-4 text-blue-600" />
//                       Primary Insurance
//                     </div>
//                   </label>
//                   <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                     <option>AETNA / U.S. HEALTHCARE</option>
//                   </select>
//                   <div className="grid grid-cols-2 gap-4 mt-2">
//                     <input
//                       type="text"
//                       placeholder="Subscriber ID/Claim #"
//                       defaultValue="10000044"
//                       className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                     <input
//                       type="text"
//                       placeholder="Group/Policy"
//                       defaultValue="825822-10-0"
//                       className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="h-4 w-4 text-blue-600" />
//                     Date of Injury
//                   </div>
//                 </label>
//                 <input
//                   type="date"
//                   className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="mt-6 space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <div className="flex items-center gap-2">
//                   <Users className="h-4 w-4 text-blue-600" />
//                   CC Providers
//                 </div>
//               </label>
//               <div className="flex gap-2">
//                 <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//                   <option>BABBIT - BABBIT, CASEY</option>
//                 </select>
//                 <button className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
//                   <Plus className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 <div className="flex items-center gap-2">
//                   <MessageSquare className="h-4 w-4 text-blue-600" />
//                   Comment
//                 </div>
//               </label>
//               <textarea
//                 className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 rows={3}
//               />
//             </div>

//             <div className="flex flex-wrap gap-4">
//               <label className="flex items-center">
//                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
//                 <span className="ml-2 text-sm text-gray-700">Hold</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
//                 <span className="ml-2 text-sm text-gray-700">High Priority</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
//                 <span className="ml-2 text-sm text-gray-700">PSC Hold</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
//                 <span className="ml-2 text-sm text-gray-700">Assistant</span>
//               </label>
//               <label className="flex items-center">
//                 <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
//                 <span className="ml-2 text-sm text-gray-700">Confidential-Only discuss w/patient</span>
//               </label>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default LabOrderContent;


import React from 'react';
import { Calendar, User, FileText,  Users, MessageSquare, AlertCircle, Building, CreditCard, ChevronDown, Plus, Shield } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h2 className={`text-xl  font-semibold ${className}`}>
    {children}
  </h2>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const InsuranceSection = ({ title, defaultInsurance = "", defaultSubscriber = "", defaultGroup = "", showNone = false }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      <div className="flex items-center gap-2">
        <Shield className="h-4 w-4 text-blue-600" />
        {title}
      </div>
    </label>
    <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
      {showNone && <option>(None)</option>}
      {defaultInsurance && <option>{defaultInsurance}</option>}
    </select>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <input
          type="text"
          placeholder="Subscriber ID/Claim #"
          defaultValue={defaultSubscriber}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Group/Policy"
          defaultValue={defaultGroup}
          className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  </div>
);

const LabOrderContent = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Card className="max-w-5xl mx-auto">
        <CardHeader className="bg-blue-600">
          <CardTitle className="text-white flex items-center gap-2 ">
            <FileText className="h-6 w-6" />
            Lab Order Form
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-blue-600" />
                    Order #
                  </div>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-blue-600" />
                    Provider
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>SMITH, TRACY MD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    Signers
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Signers</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Folder
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Orders</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Order Date
                  </div>
                </label>
                <input
                  type="date"
                  defaultValue="2025-01-17"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bill To:</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="radio" name="billTo" value="provider" className="mr-2" />
                    Provider
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="billTo" value="insurance" className="mr-2" defaultChecked />
                    Insurance
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="billTo" value="patient" className="mr-2" />
                    Patient
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    Priority
                  </div>
                  
                </label>
                
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Routine</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Department
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Department</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-blue-600" />
                    Facility
                  </div>
                </label>
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Facility</option>
                </select>
              </div>

              {/* Insurance Sections */}
              <div className="space-y-6">
                <InsuranceSection 
                  title="Primary Insurance"
                  defaultInsurance="AETNA / U.S. HEALTHCARE"
                  defaultSubscriber="10000044"
                  defaultGroup="825822-10-0"
                />

                <InsuranceSection 
                  title="Secondary Insurance"
                  showNone={true}
                />

                <InsuranceSection 
                  title="Tertiary Insurance"
                  showNone={true}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    Date of Injury
                  </div>
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  CC Providers
                </div>
              </label>
              <div className="flex gap-2">
                <select className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>BABBIT - BABBIT, CASEY</option>
                </select>
                <button className="p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  Comment
                </div>
              </label>
              <textarea
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={3}
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Hold</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">High Priority</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">PSC Hold</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Assistant</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                <span className="ml-2 text-sm text-gray-700">Confidential-Only discuss w/patient</span>
              </label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LabOrderContent;