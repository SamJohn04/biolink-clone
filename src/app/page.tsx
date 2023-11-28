import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full min-h-screen bg-white items-center justify-center">
      <div className="flex flex-col w-[40%]">
        <div className="flex items-center justify-center   gap-3 ">
          <img width="20" height="20" src="./star.png" alt="star--v1" />
          <img width="20" height="20" src="./star.png" alt="star--v1" />
          <img width="20" height="20" src="./star.png" alt="star--v1" />
          <img width="20" height="20" src="./star.png" alt="star--v1" />
          <img width="20" height="20" src="./star.png" alt="star--v1" />
        </div>
        <div className="flex text-black justify-center pt-5">
          Loved by 500,000+ creators
        </div>
      </div>
      <div className="flex items-center md:w-[43%] w-[90%] px-[10px]">
        <div className="md:text-[5.7rem] text-[40px] text-black font-poppins text-center leading-tight tracking-tight gradient-text p-[1%]">
          Launch your site in seconds
        </div>
      </div>
      <div className="flex items-center justify-center">
        <label className="">First name</label>
        <input className="w-[300px] h-[60px]" />
      </div>
    </main>
  );
}
