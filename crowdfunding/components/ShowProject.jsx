'use client'
import { setGlobalState, useGlobalState } from "@/store";
import imgUrl from "../assets/crowd.jpg";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";


const ShowProject = () => {

    const [modal] = useGlobalState("showModal");

    const closeModal = () => {
      setGlobalState("showModal", "scale-0");
    };


  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center
    bg-black bg-opacity-50 transform transition-transform duration-300 ${modal}`}
    >
      <div
        className="bg-[#151c25] shadow-xl shadow-[#e32970] rounded-xl w-11/12
        md:w-2/5 h-7/12 p-6"
      >
        <div className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Donate Project</p>
            <button
              type="button"
              onClick={closeModal}
              className="border-0 bg-transparent focus:outline-none"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
              <Image
                className="h-full w-full object-cover cursor-pointer"
                src={imgUrl}
                alt="NFT"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">Title</h4>
            <p className="text-gray-400 text-xs my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              temporibus eaque repellat in incidunt! Perspiciatis nobis tenetur
              pariatur consequuntur accusamus.
            </p>
            <div className="flex justify-between items-center mt-3 text-white">
              <div className="flex justify-start items-center">
                {/* <Identicon
                  className="w-10 h-10 object-contain rounded-full mr-3"
                  string={"dddfwqg"}
                  size={50}
                /> */}

                <div className="flex flex-col justify-center items-start">
                  <small className="text-white font-bold">@Owner</small>
                  <small className="text-pink-800 font-semibold">
                    0x31...976z
                  </small>
                </div>
              </div>
              <div className="flex flex-col text-white">
                <small className="text-xs">Target Amount</small>
                <p className="text-sm font-semibold">0.34 ETH</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between items-center">
            <div className="flex w-full justify-between items-center bg-gray-800 rounded-xl mt-5">
              <input
                type="number"
                className="block w-full text-sm text-slate-500 focus:outline-none
                focus:ring-0 bg-transparent border-0 p-2"
                placeholder="Amount (ETH)"
                min={0.01}
                step={0.01}
                name="amount"
                required
              />
            </div>
            <button
              className="flex w-full justify-center items-center shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] text-white rounded-full p-2 mt-5"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProject;
