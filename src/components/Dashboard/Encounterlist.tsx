import React from "react";

const encounters = [
  { title: "MENTAL HEALTH EVAL", doctor: "JONES, CAMERON, MD", date: "12-13-17", status: "Booked" },
  { title: "MENTAL HEALTH EVAL", doctor: "OSHEA, JAMIE, MD", date: "12-07-17", status: "Booked" },
  { title: "OV - 2 PROBLEMS", doctor: "VANCE, RORY", date: "12-01-17", status: "Booked" },
  { title: "PT RE-EVAL", doctor: "BABBIT, CASEY, MD", date: "11-21-17", status: "Booked" }
];

function EncounterList({ onSubmit }) {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <ul className="space-y-4">
        {encounters.map((encounter, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <div>
              <h3 className="text-md font-normal">{encounter.title}</h3>
              <p className="text-sm text-gray-600">Doctor: {encounter.doctor}</p>
              <p className="text-sm text-gray-600">Date: {encounter.date}</p>
            </div>
            <span className="px-3 py-1 text-sm font-medium bg-blue-200 text-blue-800 rounded">
              {encounter.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EncounterList;
