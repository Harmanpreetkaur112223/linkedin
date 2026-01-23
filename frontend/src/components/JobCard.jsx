import React from "react";
export default function JobCard({ title, company, location }) {
  return (
    <>
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between cursor-pointer hover:shadow-lg shadow-gray-400">
      <div>
        <h3 className="text-blue-600 font-semibold cursor-pointer text-[1.1vw] hover:underline">
          {title}
        </h3>
        <p className="text-[1vw] text-gray-700">{company}</p>
        <p className="text-[1vw]text-gray-500">{location}</p>
      </div>
      <button className="text-gray-400 cursor-pointer">✕</button>
    </div>
    <hr />
    </>
  );
}
