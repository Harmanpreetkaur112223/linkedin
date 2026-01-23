import JobCard from "./JobCard";
import React from "react";
export default function JobsMain() {
  return (
    <div className="flex-1 space-y-4">

      <div className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-lg">
            Find a great hire, fast
          </h2>
          <p className="text-sm text-gray-500">
            Post a free job and get the #Hiring frame
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-white hover:text-blue-600">
          Post job for free
        </button>
      </div>

      <div className="bg-white rounded-lg p-4 shadow space-y-3">
        <h2 className="font-semibold text-lg ">Top job picks for you</h2>

        <JobCard
          title="Application Developer - SAP ABAP HANA"
          company="IBM"
          location="Bhubaneswar (Hybrid)"
        />
        <JobCard
          title="Back End Developer"
          company="Tata Consultancy Services"
          location="Kolkata (On-site)"
        />
        <JobCard
          title="Java SB MS"
          company="Virtusa"
          location="Andhra Pradesh (Hybrid)"
        />
      </div>

    </div>
  );
}
