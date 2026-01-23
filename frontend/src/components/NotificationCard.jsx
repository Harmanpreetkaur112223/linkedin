import React, { useState } from "react";
export default function NotificationCard({ title, time }) {
  let [read , setRead] = useState(true)
  return (
    <div
      className={`p-4 h-min w-full flex justify-between items-start border-b cursor-pointer hover:bg-slate-100 hover:shadow-gray-500 ${
        read ? "bg-white" : "bg-blue-200"
      }`}
    >
      <div className="flex gap-3 h-min w-full py-4">
        <div className="w-fit h-fit p-2 bg-green-500 rounded flex items-center justify-center text-white font-bold text-[1vw]">
          GET<br />HIRED
        </div>
        <p className="text-[1vw] text-gray-800">{title}</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span className="text-[1vw] text-gray-400">{time}</span>
        <span className="cursor-pointer text-gray-500">•••</span>
      </div>
    </div>
  );
}
