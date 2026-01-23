import React from "react";
export default function RightFooter() {
  return (
    <div className="w-64 text-sm text-gray-500 space-y-2  ">
      <p className="hover:underline cursor-pointer hover:text-blue-600">About · Accessibility · Help Center</p>
      <p className="hover:underline cursor-pointer hover:text-blue-600">Privacy & Terms · Ad Choices</p>
      <p className="hover:underline cursor-pointer hover:text-blue-600">Advertising · Business Services</p>
      <p className="hover:underline cursor-pointer hover:text-blue-600">Get the LinkedIn app · More</p>
      <p className="mt-4 text-xs cursor-pointer hover:text-blue-600">
        LinkedIn Corporation © 2026
      </p>
    </div>
  );
}
