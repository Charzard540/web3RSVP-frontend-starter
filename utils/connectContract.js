import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";
import { etherscanBlockExplorers } from "wagmi";

function connectContract(){

    const contractAddress = "0x406e71bfce659b1ec8b5fce6649527b0f831c93c";
    const contractABI = abiJSON.abi;
    let rsvpContract; 
    try{
        const { ethereum } = window;

        if (ethereum){
            // checking for ETH object in window
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();

            // instantiating new connection to the contract
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer );
        } else{
            console.log("Ethereum object doesn't exist!");
        }
    } catch(error){
        console.log("ERROR:", error);
    }
    return rsvpContract;
}