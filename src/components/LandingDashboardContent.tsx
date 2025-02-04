


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDoorOpen,
  faUserInjured,
  faFileAlt,
  faHeartbeat,
  faFileInvoice,
  faTasks,
  faPauseCircle,
  faFlag,
  faFileMedicalAlt,
  faEnvelope,
  faPrescriptionBottleAlt,
  faPills,
  faExclamationTriangle,
  faStethoscope
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TooltipNew = ({ title, value, icon, style }) => {
  return (
    <StyledWrapper>
      <div className="item-hints">
        <div className="hint" data-position={4}>
          <FontAwesomeIcon icon={icon} style={style} className="hint-dot" />
          <div className="hint-content do--split-children">
            <p>{value}</p>
          </div>
        </div>
        <span className="hint-title">{title}</span>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .item-hints {
    cursor: pointer;
    text-align: center;
  }
  .hint-dot {
    font-size: 3rem;
    color: #15579d;
  }
  .hint-content {
    visibility: hidden;
    opacity: 0;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    position: absolute;
    z-index: 10;
    margin-top: 10px;
    width: 200px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  .hint:hover .hint-content {
    visibility: visible;
    opacity: 1;
  }
  .hint-title {
    margin-top: 8px;
    display: block;
    font-size: 1rem;
    color: #333;
  }
`;

function LandingDashboard() {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        message: "Hello! How are you doing today?",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "2h ago",
        chat: [
          { sender: "John Doe", text: "Hello! How are you doing today?" },
          { sender: "You", text: "I'm doing great! Thanks for asking." },
        ],
      },
      {
        id: 2,
        name: "Jane Smith",
        message: "I'm available for the meeting at 3 PM. Let me know!",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        time: "3h ago",
        chat: [
          { sender: "Jane Smith", text: "I'm available for the meeting at 3 PM. Let me know!" },
          { sender: "You", text: "Great! I'll see you then." },
        ],
      },
      {
        id: 3,
        name: "Sam Lee",
        message: "Here's the document you requested. Let me know if you need anything else.",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        time: "5h ago",
        chat: [
          { sender: "Sam Lee", text: "Here's the document you requested. Let me know if you need anything else." },
          { sender: "You", text: "Thank you! I'll review it shortly." },
        ],
      },
      
      {
        id: 5,
        name: "Anna Kim",
        message: "Would you be able to review my project proposal?",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        time: "8h ago",
        chat: [
          { sender: "Anna Kim", text: "Would you be able to review my project proposal?" },
          { sender: "You", text: "Sure! I'll take a look and get back to you." },
        ],
      },
      {
        id: 6,
        name: "Anna Kim",
        message: "Would you be able to review my project proposal?",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        time: "8h ago",
        chat: [
          { sender: "Anna Kim", text: "Would you be able to review my project proposal?" },
          { sender: "You", text: "Sure! I'll take a look and get back to you." },
        ],
      },
      {
        id: 7,
        name: "Anna Kim",
        message: "Would you be able to review my project proposal?",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        time: "8h ago",
        chat: [
          { sender: "Anna Kim", text: "Would you be able to review my project proposal?" },
          { sender: "You", text: "Sure! I'll take a look and get back to you." },
        ],
      },
      {
        id: 8,
        name: "Anna Kim",
        message: "Would you be able to review my project proposal?",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        time: "8h ago",
        chat: [
          { sender: "Anna Kim", text: "Would you be able to review my project proposal?" },
          { sender: "You", text: "Sure! I'll take a look and get back to you." },
        ],
      },
    ];
    setMessages(data);
  }, []);

  const tooltipData = [
    { title: "Priority", value: "Arrange patient list by criticality.", icon: faFlag },
    { title: "Patients", value: "Number of individuals in the system.", icon: faUserInjured },
    { title: "Docs & Images", value: "Medical documents and images managed.", icon: faFileAlt },
    { title: "Programs", value: "Active healthcare programs.", icon: faHeartbeat },
    { title: "Charge Slips", value: "Billing documents for patient services.", icon: faFileInvoice },
    { title: "Open Items", value: "Pending tasks in the system.", icon: faTasks },
    { title: "Held", value: "Processes temporarily on hold.", icon: faPauseCircle },
    { title: "Health Watcher", value: "Monitor key health metrics.", icon: faStethoscope },
    { title: "Inbound CIE", value: "Processing incoming clinical data.", icon: faFileMedicalAlt },
    { title: "Messages", value: "Secure communication in the system.", icon: faEnvelope },
    { title: "Pharmacy Requests", value: "Requests for medication services.", icon: faPrescriptionBottleAlt },
    { title: "Prescriptions", value: "Medication details for patients.", icon: faPills },
  ];

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    setSelectedUser((prevUser) => ({
      ...prevUser,
      chat: [...prevUser.chat, { sender: "You", text: inputMessage }],
    }));
    setInputMessage("");
  };

  return (
    <div className="p-2 ">
      <main>
        <div className="flex mt-12 flex-row h-full w-full gap-4">
          {/* Left Section (Chat Area or Tooltip Section) */}
          {/* <div className="col-span-2 "> */}
          <div className="flex-1 gap-4 border rounded-lg shadow bg-white py-4  ">
            {selectedUser === null && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 gap-4">
                {tooltipData.map((item, index) => (
                  <div
                    key={index}
                    className="group hover:scale-105 transition-transform duration-300 text-center"
                  >
                    <TooltipNew
                      title={item.title}
                      value={item.value}
                      icon={item.icon}
                      style={{ fontSize: "3rem", color: "#49a5d6" }}
                    />
                  </div>
                ))}
              </div>
            )}

{/* </div> */}

            {selectedUser && (
              <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={selectedUser.image}
                    alt={selectedUser.name}
                  />
                  <div>
                    <div className="font-semibold text-lg">{selectedUser.name}</div>
                    <div className="text-sm text-gray-600">{selectedUser.time}</div>
                  </div>
                </div>

                <div className="mt-4 space-y-4 h-64 overflow-y-auto">
                  {selectedUser.chat.map((msg, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg ${
                        msg.sender === "You"
                          ? "bg-blue-100 text-blue-900"
                          : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      <div className="font-semibold">{msg.sender}</div>
                      <div>{msg.text}</div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border rounded-lg"
                    placeholder="Type a message"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                  />
                  <button
                    className="mt-2 w-full py-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            )}
          </div>

          

          {/* Right Section (Inbox List) */}
          <div className="w-2/6 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="font-bold text-lg text-gray-800">Messages</h2>
            <div className="mt-4 h-64 overflow-y-auto">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleUserClick(message)}
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src={message.image}
                    alt={message.name}
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{message.name}</div>
                    <div className="text-sm text-gray-600">{message.message}</div>
                  </div>
                  <div className="text-xs text-gray-500">{message.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="grid grid-cols-3 gap-4 mt-14">
           <div className="col-span-2 bg-white p-4 rounded-lg shadow">
            <h2 className="font-bold text-lg">Statistics</h2>
             <div className="mt-4 h-48 bg-gray-400 rounded animate-pulse"></div>
          </div>
           <div className="bg-white p-4 rounded-lg shadow">
             <h2 className="font-bold text-lg">Total Monitored Check-ins</h2>
             <div className="mt-4 h-48 bg-gray-400 rounded animate-pulse"></div>
           </div>
        </div>
      </main>
    </div>
  );
}

export default LandingDashboard;

