import React,{useState} from "react";
import NewMessage from "./NewMessage";
import MessageToPortal from "./MessageToPortal";

const MessageMainPage = () => {

    const [activeTab, setActiveTab] = useState("New Message");

  const renderTabContent = () => {
    switch (activeTab) {
      case "New Message":
        return <NewMessage />;
      case "Message To Portal":
        return <MessageToPortal />;
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center ">
    <div className="w-full max-w-full bg-white rounded-lg shadow-md">
      {/* Tab Header */}
      <div className="flex justify-center border-b">
        <button
          className={`py-2 px-4 w-1/2 text-center font-medium transition-all duration-300 ${
            activeTab === "New Message"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("New Message")}
        >
          New Message
        </button>
        <button
          className={`py-2 px-4 w-1/2 text-center font-medium transition-all duration-300 ${
            activeTab === "Message To Portal"
              ? "border-b-4 border-blue-500 text-blue-500"
              : "text-gray-500 hover:text-blue-500"
          }`}
          onClick={() => setActiveTab("Message To Portal")}
        >
          Message To Portal
        </button>
      </div>
      {/* Tab Content */}
      <div className="p-3">
        <div
          className="transition-opacity duration-500 ease-in-out"
          key={activeTab}
        >
          {renderTabContent()}
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default MessageMainPage;




