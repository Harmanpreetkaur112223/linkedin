import Navbar from "../components/Navbar";
import NetworkOverview from "../components/NetworkOverview";
import GrowCard from "../components/GrowCard";
import PeopleCard from "../components/PeopleCard";
import React from "react";
export default function Grow() {
  return (
    <>
      <Navbar />

      <div className="bg-slate-100 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 flex gap-6">
          {/* Left */}
          <aside className="w-1/4">
            <NetworkOverview />
          </aside>

          {/* Right */}
          <main className="w-3/4 space-y-4">
            <GrowCard />

            <div className="bg-white rounded-lg border p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">
                  People you may know from Amrapali University Haldwani
                </h3>
                <span className="text-sm text-[#0a66c2] cursor-pointer">
                  Show all
                </span>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <PeopleCard name="Himani Mishra" role="Student" />
                <PeopleCard name="Dheeraj Tiwari" role="Cybersecurity Analyst" />
                <PeopleCard name="Mohit Singh Adhikari" role="Supervisor Development Program" />
                <PeopleCard name="Ritik Bajetha" role="Commis 3 at Seven Seas Hotel" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
