import React from "react";
export default function NetworkOverview() {
  return (
    <>
    <div className="h-[30vh] w-[20vw] bg-white rounded-lg py-4 px-4 flex flex-col items-center gap-4">
      <div className=" h-fit w-full text-[1.3vw] font-semibold">Network Overview</div>
      <div className="h-fit w-full flex flex-row gap-1 justify-around text-[0.9vw] cursor-pointer ">
       <div className="h-fit w-full justify-around text-[0.9vw] ">
          <div>0</div>
          <div>Invite Sent</div>
        </div>
        <div className="h-fit w-full  justify-around text-[0.9vw] ">
          <div>0</div>
          <div>Connections</div>
        </div>
        <div className="h-fit w-full  justify-around text-[0.9vw] ">
          <div>0</div>
          <div>Following</div>
        </div>
      </div>
    </div>
    </>
  );
}
