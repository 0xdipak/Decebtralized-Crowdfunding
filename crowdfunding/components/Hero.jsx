'use client'
import Image from 'next/image';
import imgUrl from '../assets/crowd.jpg'
import { setGlobalState } from '@/store';


const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto
    py-10"
    >
      <div className="md:w-3/6 w-full ">
        <div className="">
          <h1 className="text-white text-5xl font-bold">
            {" "}
            Make The
            <br /> Best, <br /> <span className="text-gradient">
              Projects
            </span>{" "}
            Known
          </h1>
          <p className="text-gray-500 font-semibold text-sm mt-3">
            Make ideas come into shape and success can be shared.
          </p>
        </div>

        <div className="flex mt-5">
          <button
            className="shadow-xl shadow-black text-white bg-[#e32970]
            hover:bg-[#bd255f] rounded-full p-2"
            onClick={() => setGlobalState("modal", "scale-100")}
          >
            Create Project
          </button>
        </div>

        <div className="w-3/4 flex justify-between items-center mt-5">
          <div className="text-white">
            <p className="font-bold">300k</p>
            <small className="text-gray-300">Users</small>
          </div>
          <div className="text-white">
            <p className="font-bold">100k</p>
            <small className="text-gray-300">Donors</small>
          </div>
          <div className="text-white">
            <p className="font-bold">500+</p>
            <small className="text-gray-300">Projects</small>
          </div>
        </div>
      </div>

      <div
        className="shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md
      overflow-hidden bg-gray-800"
      >
        <Image
          src={imgUrl}
          alt="NFT art"
          className="h-64 w-full object-cover"
        />
        <div className="flex justify-start items-center p-3">
          {/* <Identicon
            className="h-10 w-10 object-contain rounded-full mr-3"
            string={"0x21...754g"}
            size={50}
          /> */}
          <div>
            <p className="text-white font-semibold">
              Fundraising is the gentle art of teaching the joy of giving.
            </p>
            <small className="text-pink-800 font-bold">@Hank Rosso</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero