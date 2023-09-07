'use client'
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { AppData } from "@/app/page";
import { truncate } from "@/store";

const Header = () => {
  const App = useContext(AppData)
  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Image
          className="md:w-32 w-40 cursor-pointer lg:w-36"
          src={logo}
          alt="logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] md:flex text-white hidden list-none justify-between items-center 
      flex-initial"
      >
        <Link href={"/"}>
          <li className="mx-4 cursor-pointer">Home</li>
        </Link>
        <Link href={"/proposal"}>
          <li className="mx-4 cursor-pointer">Proposal</li>
        </Link>
        <Link href={"/members"}>
          <li className="mx-4 cursor-pointer">Members</li>
        </Link>
        <Link href={"/contact"}>
          <li className="mx-4 cursor-pointer">Contact</li>
        </Link>
      </ul>

      {App.address ? (
        <button
          className="shadow-xl text-sm shadow-black text-white bg-[#e32970] hover:bg-[#bd255f]
      md:text-xs p-2 rounded-full ml-12"
          onClick={App.connectWallet}
        >
          {truncate(App.address, 4, 4, 11)} || {truncate(App.balance,4,0,0)} ETH
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white bg-[#e32970] hover:bg-[#bd255f]
      md:text-xs p-2 rounded-full ml-12"
          onClick={App.connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
