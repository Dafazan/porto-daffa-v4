"use client";
import React, { useState } from "react";
import Image from "next/image";

function Taskbar() {
  const [hoverstate, setHoverstate] = useState(0);
  return (
    <div>
      <div className="taskbar rounded-xl gap-2 h-[65px] flex justify-center items-end p-2">
        <div className={`h-12 w-12 hover:h-16 hover:w-16 duration-100`}>
          <Image
            src={"/icons/finder.png"}
            alt="icons"
            width={200}
            height={200}
          />
        </div>
        <div className={`h-12 w-12 hover:h-16 hover:w-16 duration-100`}>
          <Image
            src={"/icons/launchpad.png"}
            alt="icons"
            width={200}
            height={200}
          />
        </div>
        <div className={`h-12 w-12 hover:h-16 hover:w-16 duration-100`}>
          <Image
            src={"/icons/setting.png"}
            alt="icons"
            width={200}
            height={200}
          />
        </div>
        <div className={`h-12 w-12 hover:h-16 hover:w-16 duration-100`}>
          <Image
            src={"/icons/safari.png"}
            alt="icons"
            width={200}
            height={200}
          />
        </div>
        <div className={`h-12 w-12 hover:h-16 hover:w-16 duration-100`}>
          <Image
            src={"/icons/appstore.png"}
            alt="icons"
            width={200}
            height={200}
          />
        </div>
        <div className={`h-12 w-12 hover:h-16 hover:w-16 duration-100`}>
          <Image src={"/icons/note.png"} alt="icons" width={200} height={200} />
        </div>
      </div>
    </div>
  );
}

export default Taskbar;
