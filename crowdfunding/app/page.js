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

const AppData = createContext();

export default function Home() {
  if (typeof window === "object") {
    const { ethereum } = window;
  }
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

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

  console.log(balance);

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

  useEffect(() => {
    isWalletConnected();
    getBalance();
  }, []);
  return (
    <AppData.Provider value={{ address, balance, connectWallet }}>
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
      </div>
    </AppData.Provider>
  );
}

export { AppData };
