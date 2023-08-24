import Image from "next/image";
import timeless from "../assets/timeless.png";



const Header = () => {
  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image
          className="md:w-32 w-40 cursor-pointer"
          src={timeless}
          alt="logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] md:flex text-white hidden list-none justify-between items-center 
      flex-initial"
      >
        <li className="mx-4 cursor-pointer">Home</li>
        <li className="mx-4 cursor-pointer">Proposal</li>
        <li className="mx-4 cursor-pointer">Members</li>
        <li className="mx-4 cursor-pointer">Contact</li>
      </ul>

      
        <button
          className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f]
      md:text-xs p-2 rounded-full ml-12"
        >
          Connect Wallet
        </button>
      
    </div>
  );
}

export default Header