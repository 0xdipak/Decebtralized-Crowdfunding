

if (typeof window !== "undefined") {
  ethereum = window.ethereum;
}


const connectWallet = async () => {
  try {
    if (!ethereum) return reportError("Please Install Metamask");
    const accounts = await ethereum.request?.({
      method: "eth_requestAccounts",
    });
    store.dispatch(setWallet(accounts?.[0]));
  } catch (error) {}
};

export { connectWallet };
