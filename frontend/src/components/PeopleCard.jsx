import React from "react";
export default function PeopleCard({ name, role }) {
  return (
    <div className="border h-fit w-fit py-8 px-8 rounded-lg p-4 text-center bg-white relative hover:shadow-md hover:shadow-black hover:border-none">
      <img src="profile.png" className="w-[8vw]  bg-gray-200 rounded-full mx-auto mb-3 cursor-pointer" />
      <img src="cut.png" alt="" className="h-[1.8vw]  p-2 rounded-full absolute top-1 cursor-pointer hover:bg-slate-200 right-2" />
      <h4 className="font-bold text-[1vw[">Harmanpreet</h4>
      <p className="text-[0.9vw] text-gray-500 mb-3">Stduent</p>

      <button className="border border-[#0a66c2] text-[#0a66c2] px-4 py-1 rounded-full text-sm font-medium cursor-pointer">
        Connect
      </button>
    </div>
  );
}
