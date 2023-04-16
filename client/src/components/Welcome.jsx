import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import SkewLoader from "react-spinners/SkewLoader";
import { useEffect } from "react";
import { TransactionContext } from "../context/TransactionContext";
import { useContext } from "react";
import { toast } from "react-hot-toast";

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  const {
    connectWallet,
    currentAccount,
    formData,
    handleFormChange,
    sendTransaction,
    isLoading,
    sendSuccess,
    setSendSuccess
  } = useContext(TransactionContext);
  const { addressTo, amount, keyword, message } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!addressTo || !amount || !keyword) {
      return toast.error("Please fill in the details to initiate the transaction!");
    }
    sendTransaction();
  };

  useEffect(() => {
    if (sendSuccess) {
      setTimeout(() => {
        setSendSuccess(false);
      }, 5000);
    }
  }, [sendSuccess]);

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 mt-20">
        <div className="flex flex-1 justify-start flex-col mf:mr-10">
          <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">
            Send Crypto <br />
            across the world!
          </h1>
          <p className="text-white text-left text-base mt-5 font-light md:w-9/12 w-11/12">
            Explore the crypto world. Buy & Sell cryptocurrency easily on Krypto.
          </p>
          {!currentAccount ? (
            <button
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952E3] p-3 rounded-full cursor-pointer hover:bg-[#2546BD]"
            >
              <p className="text-white text-base font-semibold">Connect Wallet</p>
            </button>
          ) : (
            <div
              className="flex flex-row justify-center items-center my-5 bg-[#2952E3] text-white blue-glassmorphism p-3 rounded-full select-none"
            >
              Account Connected
            </div>
          )}
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>
              Reliability
            </div>
            <div className={`rounded-tr-2xl md:rounded-none ${commonStyles}`}>
              Security
            </div>
            <div className={`md:rounded-tr-2xl ${commonStyles}`}>
              Ethereum
            </div>
            <div className={`md:rounded-bl-2xl ${commonStyles}`}>
              Web 3.0
            </div>
            <div className={`rounded-bl-2xl md:rounded-none ${commonStyles}`}>
              Low fees
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm break-all">
                  {currentAccount}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <input placeholder="*Address To" value={addressTo} type="text" onChange={(e) => handleFormChange(e, "addressTo")}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <input placeholder="*Amount (ETH)" value={amount} type="number" step="0.0001" onChange={(e) => handleFormChange(e, "amount")}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <input placeholder="*Keyword (Gif)" value={keyword} type="text" onChange={(e) => handleFormChange(e, "keyword")}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <input placeholder="Enter Message" value={message} type="text" onChange={(e) => handleFormChange(e, "message")}
              className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {isLoading ? (
              <SkewLoader
                color="green"
                size={45}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              sendSuccess ? (
                <button
                  onClick={() => setSendSuccess(false)}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3D4F7C] hover:bg-[#3c3c3d] rounded-full cursor-pointer"
                >
                  Sent 😥
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3D4F7C] hover:bg-[#3c3c3d] rounded-full cursor-pointer"
                >
                  Send Now 🚀
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome