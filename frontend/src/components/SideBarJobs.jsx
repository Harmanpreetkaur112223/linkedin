import React from "react";
export default function SideBarJobs() {
  return (
    <div className="w-64 space-y-4">
      
      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-teal-500 text-white flex items-center justify-center text-2xl font-bold">
            H
          </div>
          <h3 className="mt-2 font-semibold">Harmanpreet kaur</h3>
          <p className="text-sm text-gray-500 text-center">
            Student at Amrapali University Haldwani
          </p>
          <p className="text-xs text-gray-400">Bazpur, Uttarakhand</p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 shadow space-y-3">
        <p className="font-medium">Preferences</p>
        <p className="font-medium">My jobs</p>
        <p className="font-medium">My Career Insights</p>
        <button className="text-blue-600 font-semibold">
          Post a free job
        </button>
      </div>

    </div>
  );
}
