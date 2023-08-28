'use client'
import { FaTimes} from 'react-icons/fa'
import imgUrl from "../assets/crowd.jpg";
import Image from 'next/image';
import { setGlobalState, useGlobalState } from '@/store';

const CreateProject = () => {

    const [modal] = useGlobalState('modal');


    const closeModal = () => {
        setGlobalState('modal','scale-0')
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
        <form className="flex flex-col">
          <div className="flex justify-between items-center text-gray-400">
            <p className="font-semibold">Add Project</p>
            <button
              type="button"
              className="border-0 bg-transparent focus:outline-none"
              onClick={closeModal}
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex justify-center items-center rounded-xl mt-5">
            <div className="shrink-0 rounded-xl overflow-hidden h-20 w-20">
              <Image
                className="h-full w-full object-cover cursor-pointer"
                src={imgUrl}
                alt="image"
              />
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <label className="block">
              <span className="sr-only">Choose Profile Photo</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-[#1d2631]
                 focus:outline-none cursor-pointer focus:ring-0"
                accept="image/png, image/gif, image/jpeg, image/jpg"
                required
              />
            </label>
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="text"
              className="block w-full text-sm text-slate-500 focus:outline-none  
                focus:ring-0 bg-transparent border-0 p-2"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              placeholder="Title"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <input
              type="number"
              className="block w-full text-sm text-slate-500 focus:outline-none
                focus:ring-0 bg-transparent border-0 p-2"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              placeholder="Amount (ETH)"
              min={0.01}
              step={0.01}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              type="text"
              className="block w-full text-sm text-slate-500 focus:outline-none  
                focus:ring-0 bg-transparent border-0 h-20 p-2 resize-none"
              accept="image/png, image/gif, image/jpeg, image/jpg"
              placeholder="Description"
              name="description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="text-center my-5">
            <button
              className="flex w-full justify-center items-center shadow-lg shadow-black text-sm bg-[#e32970]
            hover:bg-[#bd255f] text-white rounded-full p-2 mt-5"
            >
              Create Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProject;
