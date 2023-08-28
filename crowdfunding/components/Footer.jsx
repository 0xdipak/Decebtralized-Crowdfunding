import Image from "next/image";
import timeless from "../assets/timeless.png";

const Footer = () => {
  return (
    <div
      className="w-full flex md:justify-center justify-between items-center flex-col
    p-4 gradient-bg-footer"
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center my-4">
        <div className="flex flex-[0.25] justify-center items-center">
          <Image className="w-32" src={timeless} alt="logo" />
        </div>

        <div
          className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full text-white
            text-base text-center"
        >
          <p className="cursor-pointer mx-2">Home</p>
          <p className="cursor-pointer mx-2">Proposal</p>
          <p className="cursor-pointer mx-2">Members</p>
          <p className="cursor-pointer mx-2">Contact</p>
        </div>
        <div className="flex flex-[0.25] justify-center items-center mt-3">
          <p className="text-white text-right text-sm">
            &copy;2023 All right reversed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
