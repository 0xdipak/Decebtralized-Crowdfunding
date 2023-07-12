import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";


// const AppState = createContext();

export default function Home() {
  // // const ethereum = window.ethereum;
  // const [login, setLogin] = useState(false);
  // const [wallet, setWallet] = useState("");

  // const connectWallet = async () => {
  //   try {
  //     if (!ethereum) return reportError("Please install Metamask");
  //     const accounts = await ethereum.request?.({
  //       method: "eth_requestAccounts",
  //     });
  //     setLogin(true);
  //     setWallet(accounts?.[0]);
  //   } catch (error) {}
  // };

  // const checkWallet = async () => {
  //   try {
  //     if (!ethereum) return reportError("Please install Metamsk");
  //     const accounts = await ethereum.request?.({ method: "eth_accounts" });

  //     ethereum.on("chainChanged", () => {
  //       window.location.reload();
  //     });

  //     ethereum.on("accountsChanged", async () => {
  //       setWallet(accounts?.[0]);
  //       await checkWallet();
  //     });

  //     if (accounts?.length) {
  //       setWallet(accounts?.[0]);
  //     } else {
  //       reportError("Plese connect wallet, Account not found");
  //     }
  //   } catch (error) {
  //     reportError(error);
  //   }
  // };

  // useEffect(() => {
  //   checkWallet();
  // },[])

  return (
    // <AppState.Provider value={{ login, setLogin, connectWallet, wallet }}>
      <div className="min-w-full h-screen radial-gradient flex flex-col">
            <Navbar />
            {/* <Footer /> */}
      </div>
    // </AppState.Provider>
  );
}

// export { AppState };
