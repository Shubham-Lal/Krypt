import { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import toast from "react-hot-toast";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    });
};

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return toast.error("Please install MetaMask Extension!");
            const accounts = await ethereum.request({ method: "eth_accounts" });

            if (accounts.length) {
                setCurrentAccount(accounts[0]);

                // Get All Transactions
            }
            else {
                toast.error("No Accounts found!");
            }
        }
        catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) return toast.error("Please install MetaMask Extension!");
            const accounts = await ethereum.request({ method: "eth_requestAccounts" });
            setCurrentAccount(accounts[0]);
        }
        catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected()
    }, []);

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    );
}