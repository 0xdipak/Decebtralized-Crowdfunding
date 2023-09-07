import { AppData } from '@/app/page';
import { useGlobalState } from '@/store';
import { ethers } from 'ethers';
import { useContext } from 'react';
import {BiTransfer} from 'react-icons/bi'
import { MdOpenInNew } from "react-icons/md";

const Transactions = () => {

  const App = useContext(AppData);
  const [project] = useGlobalState("project");
  const id = project?.id.toString();


  return (
    <div className="bg-[#151c25]">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-3xl font-bold uppercase text-gradient">
          Latest Transactions
        </h4>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 
          lg:gap-2 py-2.5"
        >
          {App.txData
            .map((txn, i) => (
              <Transaction key={i} txn={txn} />
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
}


const Transaction = ({ txn }) => (
  <div
    className="flex justify-between items-center border border-pink-500 text-gray-400
    w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3"
  >
    <div className="rounded-md shadow-sm shadow-pink-500 p-2">
      <BiTransfer />
    </div>
    <div>
      <h4 className="text-sm"># Fund Transfered</h4>
      <small className="flex justify-start items-center">
        <span className="mr-1">Received by</span>
        <a
          className="flex gap-2 justify-center items-center"
          href={`https://sepolia.etherscan.io/tx/${txn.transactionHash}`}
          target="_blank"
        >
          <p className="text-pink-500">
            {txn?.args.to.slice(0, 5)}...{txn?.args.to.slice(38)}
          </p>
          <MdOpenInNew />
        </a>
      </small>
      <small className="flex justify-start items-center">
        <span className="mr-1">From</span>
        <a
          className="flex gap-2 justify-center items-center"
          href={`https://sepolia.etherscan.io/tx/${txn.transactionHash}`}
          target="_blank"
        >
          <p className="text-pink-500">
            {txn?.args.from.slice(0, 5)}...{txn?.args.from.slice(38)}
          </p>
          <MdOpenInNew />
        </a>
      </small>
    </div>

    <p className="text-sm font-medium">
      {ethers.utils.formatEther(txn.args.amount)} ETH
    </p>
  </div>
);

export default Transactions