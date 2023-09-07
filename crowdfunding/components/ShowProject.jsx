'use client'
import { setGlobalState, truncate, useGlobalState } from "@/store";
import imgUrl from "../assets/crowd.jpg";
import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useContext, useState } from "react";
import { AppData } from "@/app/page";
import { ethers } from "ethers";
import Transactions from "./Transactions";


const ShowProject = () => {
  const App = useContext(AppData);
  const [project] = useGlobalState("project");
  const id = project?.id.toString();
  // console.log(project);
  const [amount, setAmount] = useState('');

    const [modal] = useGlobalState("showModal");

    const closeModal = () => {
      setGlobalState("showModal", "scale-0");
    };

    const donateProject = async(e) => {
      const txn = await App.projectContract.donateProject(id, {
        value: ethers.utils.parseEther(amount),
      });
      await txn.wait();
    }



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
              <img
                className="h-full w-full object-cover cursor-pointer"
                src={project?.imageURI}
                alt="NFT"
              />
            </div>
          </div>

          <div className="flex flex-col justify-start rounded-xl mt-5">
            <h4 className="text-white font-semibold">{project?.title}</h4>
            <p className="text-gray-400 text-xs my-1">{project?.description}</p>
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
                    {project?.owner.slice(0, 5)}...{project?.owner.slice(38)}
                  </small>
                </div>
              </div>
              <div className="flex flex-col text-white">
                <small className="text-xs">Target Amount</small>
                <p className="text-sm font-semibold">
                  {project
                    ? `${ethers.utils.formatEther(project?.target)} ETH`
                    : "No ETH"}
                </p>
                <small>Raised Amount</small>
                <p className="text-sm font-semibold">
                  {project
                    ? `${ethers.utils.formatEther(
                        project?.amountCollected
                      )} ETH`
                    : "No ETH"}
                </p>
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
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <button
            onClick={donateProject}
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
