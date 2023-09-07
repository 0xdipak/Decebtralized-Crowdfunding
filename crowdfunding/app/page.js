"use client";
import CreateProject from "@/components/CreateProject";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectWork from "@/components/ProjectWork";
import ShowProject from "@/components/ShowProject";
import Transactions from "@/components/Transactions";
import { ethers } from "ethers";
import { createContext, useState, useEffect } from "react";
// import { abi, contractAddress } from "@/services/constants";
import abi from "./contractabi.json";
import Loading from "@/components/Loading";
import Alert from "@/components/Alert";
import { setAlert, setGlobalState } from "@/store";

const AppData = createContext();

export default function Home() {

  let ethereum;
  if (
    typeof window.ethereum !== "undefined" ||
    typeof window.web3 !== "undefined"
  ) {
     ethereum = window.ethereum;
  }
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [projects, setProjects] = useState([]);
  const [txData, setTxData] = useState([]);
  
  const contractAddress = "0xC454C0f22299c8972c4E27B62B242C2D2AcDf84D";
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const projectContract = new ethers.Contract(contractAddress, abi, signer);


  const connectWallet = async () => {
    try {
      await ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };


  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const balance = await signer.getBalance();
    setBalance(ethers.utils.formatEther(balance));
  };

  const isWalletConnected = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      window.ethereum.on("accountChanged", async () => {
        setAddress(accounts[0]);
        await isWalletConnected();
      });

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });

      if (accounts.length) {
        setAddress(accounts[0]);
      } else {
        alert("Please Cannect Wallet");
        console.log("No Ethereum Accounts found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProjects = async () => {
    setGlobalState("loading", { show: true, msg: "Fetching Projects..." });
    const data = await projectContract.getProjects();
    setProjects(data);
    setAlert("Success");
  };

  const allTxnData = async () => {
    const tx = await projectContract.filters.Transactions();
    const txdata = await projectContract.queryFilter(tx);
    setTxData(txdata);
  };

  useEffect(() => {

    isWalletConnected();
    getBalance();
    getProjects();
    allTxnData();
  }, []);
  return (
    <AppData.Provider
      value={{
        address,
        balance,
        connectWallet,
        projectContract,
        projects,
        txData,
      }}
    >
      <div className="min-h-screen">
        <div className="gradient-bg-hero">
          <Header />
          <Hero />
        </div>
        <ProjectWork />
        <Transactions />
        <Footer />
        <CreateProject />
        <ShowProject />
        <Alert />
        <Loading />
      </div>
    </AppData.Provider>
  );
}

export { AppData };
