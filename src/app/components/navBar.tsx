import React from "react";

function NavBar() {
  return (
    <div className="z-10 flex justify-center w-full h-full text-black">
      <div className="md:w-[70%] w-[95%] h-full bg-white m-2 z-2 rounded-full shadow-md text-slate-800 font-semibold">
        <div className="flex items-center justify-between">
          <div className="flex gap-6  p-7 ">
            <label>LOGO</label>
            <label className="md:flex hidden">Features</label>
            <label className="md:flex hidden">FAQ</label>
          </div>
          <div className="flex gap-6 px-5">
            <button title="login">Log in</button>
            <button title="Signup" className="bg-black py-3 px-6 rounded-full text-white">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
