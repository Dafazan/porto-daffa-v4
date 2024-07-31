import Taskbar from "@/component/taskbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex max-h-screen max-w-screen bg-white relative">
      <div className="absolute w-screen h-screen bg-violet-300">
        <Image
          alt=""
          src={"/wall.jpg"}
          width={1080}
          height={1080}
          className="w-screen h-screen"
        />
      </div>

      <div className="absolute w-screen h-screen flex flex-col">
        <div className="w-full  flex px-5 py-1 justify-between items-center">
          <div className="flex gap-3 text-[12px] items-center text-white ">
            <Image
              src={"/icons/Apple_logo.svg"}
              alt="icons"
              width={100}
              height={100}
              className="w-[11px] h-[14px]"
            />

            <p>Finder</p>
            <p>File</p>
            <p>Edit</p>
            <p>View</p>
            <p>Go</p>
            <p>Window</p>
            <p>Help</p>
          </div>
          <div className="flex gap-3 text-[12px] items-center text-white ">
            <Image
              src={"/icons/battery.100.svg"}
              alt="icons"
              width={100}
              height={100}
              className="w-[24px] h-[24px]"
            />
            <Image
              src={"/icons/switch.svg"}
              alt="icons"
              width={100}
              height={100}
              className="w-[24px] h-[24px]"
            />
            <Image
              src={"/icons/magnifyingglass.svg"}
              alt="icons"
              width={100}
              height={100}
              className="w-[24px] h-[24px]"
            />
            <Image
              src={"/icons/wifi.svg"}
              alt="icons"
              width={100}
              height={100}
              className="w-[24px] h-[24px]"
            />
            <p>Mon Jun 22</p>
            <p>10:00 AM</p>
          </div>
        </div>
        <div className="h-full w-full"></div>
        <div className=" w-full flex justify-center items-center px-20 pb-4">
          <Taskbar />
        </div>
      </div>
    </main>
  );
}
