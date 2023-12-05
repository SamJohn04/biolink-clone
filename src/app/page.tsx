import Image from "next/image";
import star from "../../public/star.png";
import NavBar from "./components/navBar";
import ThemeBox from "./components/themeBox";
import MyScrollComponent from "./components/scrollDiv";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full min-h-screen bg-[#f7f6f6] overflow-x-hidden">
      <NavBar />
      <section
        id="home"
        className="flex flex-col w-full h-full min-h-screen bg-transparent items-center justify-center mt-[-100px]"
      >
        <div className="flex flex-col md:w-[40%] w-[80%]">
          <div className="flex items-center justify-center   gap-3 ">
            <Image width="20" height="20" src={star} alt="star--v1" />
            <Image width="20" height="20" src={star} alt="star--v1" />
            <Image width="20" height="20" src={star} alt="star--v1" />
            <Image width="20" height="20" src={star} alt="star--v1" />
            <Image width="20" height="20" src={star} alt="star--v1" />
          </div>
          <label className="flex text-black justify-center pt-5">
            Loved by 500,000+ creators
          </label>
        </div>
        <div className="flex items-center md:w-[43%] w-[90%] px-[10px]">
          <label className="md:text-[5.7rem] text-[40px] text-black font-poppins text-center leading-tight tracking-tight gradient-text p-[1%] duration-300">
            Launch your site in seconds
          </label>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center h-[50px] md:h-[55px] w-[300px] md:w-[400px] rounded-xl bg-gradient-to-r from-pink-500 via-[#7777e5] to-yellow-500 pl-[2px] py-[2px] overflow-hidden">
            <div className="flex h-full w-full items-center justify-between bg-white rounded-xl ">
              <div className="flex justify-start items-center md:pl-[30px] pl-[10px]">
                <h1 className="text-black md:text-xl">bio.link/</h1>
                <input
                  className="md:h-[45px] h-[40px] md:w-[130px]  border-none focus:outline-none focus:border-transparent w-[80px] md:text-xl text-black"
                  placeholder="yourname"
                ></input>
              </div>
              <button
                title="claim my link"
                className="h-[55px] w-full bg-gradient-to-br from-[#ca5bb6] via-[#db4df8]  to-[#7777e5] text-white "
              >
                <label htmlFor="" className="font-semibold ">
                  Claim your link
                </label>
              </button>
            </div>
          </div>
          <label className="text-black p-4">
            It&apos;s free, and takes less than a minute
          </label>
        </div>
      </section>
      <section id='about' className="flex flex-col items-center justify-center text-black p-5">
        <h1 className="text-[4rem]  font-inter">Unmatchable features. </h1>
        <h1 className="text-[4rem] font-inter text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Free , forever. </h1>
        <div className="flex flex-col gap-8 p-5">
          <div className="flex gap-8">
            <ThemeBox text="Pick a theme or design your own" image='/themes.png' />
            <ThemeBox text="Pick a theme or design your own" image='/theme2.png' />
          </div>
          <div className="flex gap-8">
            <ThemeBox text="Pick a theme or design your own" image='/theme3.png' />
            <ThemeBox text="Pick a theme or design your own" image='/theme4.png' />
          </div>

        </div>
      </section>

      <section id='smthn' className="flex flex-col items-center justify-center text-black">
<MyScrollComponent/>
      </section>

      <section id='smthn' className="flex flex-col items-center justify-center text-black min-h-screen ">

      </section>
    </main>
  );
}
