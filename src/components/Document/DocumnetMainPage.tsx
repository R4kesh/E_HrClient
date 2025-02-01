import React,{useState} from 'react'
import Information from './Information';
import Document from './Document';

const DocumnetMainPage = () => {
 
    const [activeTab, setActiveTab] = useState("Information");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Information":
        return <Information />;

      case "Document":
        return <Document />;
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-y-2 ">
    <div className="w-full max-w-full bg-white rounded-lg shadow-md">
      {/* Tab Header */}
      <div className="flex justify-center border-b">
        <button
          className={`py-2 px-4 w-1/2 text-center font-medium transition-all duration-300 ${
            activeTab === "Information"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("Information")}
        >
          Information
        </button>
        <button
          className={`py-2 px-4 w-1/2 text-center font-medium transition-all duration-300 ${
            activeTab === "Document"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("Document")}
        >
          Document
        </button>
      </div>
      {/* Tab Content */}
      <div >
        <div
          className="transition-opacity duration-500 ease-in-out"
          key={activeTab}
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  </div>
  )
}

export default DocumnetMainPage
