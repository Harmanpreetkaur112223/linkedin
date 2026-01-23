import React from "react";
export default function GrowCard() {
  return (
    <div className="bg-white rounded-lg p-6 border flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Invite 5 of your colleagues to connect today
        </h2>
        <p className="text-sm text-gray-600 mb-4 max-w-lg">
          Hiring managers notice strong networks. Start with friends,
          teammates, and managers.
        </p>

        <button className="bg-[#0a66c2] text-white px-5 py-2 rounded-full text-sm font-medium">
          🔍 Search for people you know
        </button>
      </div>

      <div className="flex gap-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="w-10 h-10 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-sm text-gray-500"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}
