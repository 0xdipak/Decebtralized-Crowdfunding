"use client";
import Image from "next/image";
import Logo from "../assets/metamask.png";
import { useEffect, useState } from "react";

const Login = () => {

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}
const [wallet, setWallet] = useState('');

const connectWallet = async () => {
  try {
    if (!ethereum) return reportError("Please Install Metamask");
    const accounts = await ethereum.request?.({
      method: "eth_requestAccounts",
    });
   setWallet(accounts?.[0]);
  } catch (error) {
    console.log(error);
  }
};

const checkWallet = async () => {
  try {
    if (!ethereum) return reportError("Please Install Metamask");
    const accounts = await ethereum.request?.({ method: "eth_accounts" });

    ethereum.on("chainChanged", () => {
      window.location.reload();
    });

    ethereum.on("accountsChanged", async () => {
      setWallet(accounts?.[0]);
      await checkWallet();
    });

    if (accounts?.length) {
      setWallet(accounts?.[0]);
    } else {
      setWallet("");
      
      console.log("Please Connect Wallet, Account Not Found");
    }
  } catch (error) {
    
    console.log(error);
  }
};

useEffect(() => {
  checkWallet();
},[])

  return (
    <div>
      {wallet ? (
        <h1 className="cursor-pointer">
          {wallet.slice(0, 5)}...{wallet.slice(38)}
        </h1>
      ) : (
        <button
          className="flex items-center justify-center"
          onClick={connectWallet}
        >
          <div className="flex items-center justify-center">
            <h1 className="lg:hidden">Login</h1>
            <h1 className="hidden lg:inline">Connect with Metamask</h1>
            <Image
              src={Logo}
              width={100}
              height={50}
              className="w-10 h-10 hidden md:block object-cover ml-2"
              alt="logo"
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default Login;

//  <div className="min-w-full h-4/5 flex justify-center flex-col items-center">
//       <p className="text-white text-3xl font-semibold tracking-wider"> Decentralized CrowdFunding</p>
//       <div
//         className="w-[500px] md:w-[600px] h-40 mt-4 bg-black bg-opacity-70
//        rounded-lg shadow-lg border-opacity-40 border-4 border-black flex
//         flex-col justify-center items-center"
//       >
//         <h1 className="text-white md:text-2xl font-medium text-center">Login</h1>
//           <div
//             className="flex border-opacity-60 bg-opacity-90 text-sm lg:text-lg font-medium border-2
//              border-blue-800 cursor-pointer bg-green-800 text-white mt-4 rounded-lg justify-center
//              items-center py-1 px-2"
//           >
//             Connect With Metamask
//             <Image
//               src={Logo}
//               width={100}
//               height={50}
//               className="w-10 h-10 hidden md:block object-cover ml-2"
//               alt="logo"
//             />
//           </div>
//           install metamask
//            <div className="flex flex-col justify-center items-center">
//              <a
//          target="_blank"
//              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
//             >
//              <div className="flex border-opacity-60 bg-opacity-90 text-lg font-medium border-2 border-blue-800 cursor-pointer bg-green-800 text-white mt-4 rounded-lg justify-center items-center py-1 px-2">
//                 Install Metamask
//                <img className="h-10" src={""} alt="/" />
//                </div>
//           /  </a>
//              <p className="text-red-600 text-base mt-2">
//               Login Required Metamask Extension
//             </p>
//            </div>
//         <p className="text-red-600 text-lg mt-2">{error}</p>
//       </div>
//     </div>
