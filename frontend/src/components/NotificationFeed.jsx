import React from "react";
import NotificationCard from "./NotificationCard";

export default function NotificationFeed() {
  return (
    <div className="flex-1 space-y-4">

      {/* App banner */}
      

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow p-3 flex gap-3">
        <button className=" text-green-600 border-2 border-green-600 px-4 py-1 rounded-full focus:bg-green-700 focus:text-white hover:bg-green-500 hover:text-white cursor-pointer">
          All
        </button>
               <button className="text-green-600 border-2 border-green-600 px-4 py-1 rounded-full focus:bg-green-700 focus:text-white hover:bg-green-500 hover:text-white cursor-pointer">

          My posts
        </button>
        
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <NotificationCard
          title="Is cold applying hurting your job hunt? Here’s what an expert says."
          time="5h"
          highlighted
        />
        <NotificationCard
          title="Social media activity affects your job search more than you realise."
          time="1d"
          highlighted
        />
        <NotificationCard
          title="You appeared in 1 search this week."
          time="2d"
        />
        <NotificationCard
          title="Is it a good idea to send a thank-you note after a job interview?"
          time="6d"
        />
      </div>

    </div>
  );
}
