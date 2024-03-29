'use client'
import Image from "next/image";
import imgUrl from "../assets/crowd.jpg";
import { setGlobalState } from "@/store";
import { useContext } from "react";
import { AppData } from "@/app/page";
import { ethers } from "ethers";

const ProjectWork = () => {
  const App = useContext(AppData)

  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Latest Projects
        </h4>

        <div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3
        py-2.5"
        >
          {App.projects
            .map((project, i) => (
              <Card key={i} project={project} />
            ))}
        </div>
        {/* <div className="text-center my-5">
          <button
            className="shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] text-white rounded-full p-2"
          >
            Load More
          </button>
        </div> */}
      </div>
    </div>
  );
};

const Card = ({ project }) => {
  const setProject = () => {
    setGlobalState('project', project);
    setGlobalState('showModal', 'scale-100')
  };
  return (
    <div
      className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800
        my-2 p-3"
    >
      <img
        className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
        src={`${project.imageURI}`}
        alt="NFT image"
      />
      <h4 className="text-white font-semibold">{project?.title}</h4>
      <p className="text-gray-400 text-sm my-1 truncate">
        {project?.description}
      </p>
      <div className="flex justify-between items-center mt-3 text-white">
        <div className="flex flex-col">
          <small className="text-xs">Target </small>
          <p className="text-sm font-semibold">
            {ethers.utils.formatEther(project?.target)} ETH
          </p>
        </div>
        <button
          className="shadow-lg shadow-black text-sm bg-[#e32970]
        hover:bg-[#bd255f] rounded-full px-1.5 py-1"
          onClick={setProject}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectWork;
