/* eslint-disable react/jsx-key */
import { frames } from "@/app/frames/frames";
import { transaction } from "frames.js/core";
import { Abi, encodeFunctionData } from "viem";

const contractAddress = "0xdc0A0D70bf0418DA345D98190E24d4D70FD38bA1";
const chainId = "eip155:11155111";
const contractAbi = [
  {
    inputs: [
      {
        internalType: "bool",
        name: "_vote",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "voteId",
        type: "uint256",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "voteRegistry",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "voteId",
        type: "uint256",
      },
    ],
    name: "voteResult",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

 
export const POST = frames(async (ctx) => {
    // Do something with the request data to generate transaction data
    if (!ctx.message) {
        console.log("Got No Message")
        throw new Error("No message");
    }

    // const userAddress = ctx.message.address;
    const voteId = BigInt(parseInt(ctx.message.inputText));

    const voteValue = ctx.searchParams.voteValue;
    if (typeof(voteValue) !== "boolean") {
        console.log("Query param not boolean")
        throw new Error("No query Param");
    }
    console.log("VoteValue: ", voteValue)

    // Create calldata for the transaction using Viem's `encodeFunctionData`
    const calldata = encodeFunctionData({
        abi: contractAbi,
        functionName: "vote",
        args: [voteValue, voteId],
    });

    // Return transaction data that conforms to the correct type
    return transaction({
        chainId: chainId,
        method: "eth_sendTransaction",
        params: {
            abi: contractAbi as Abi,
            to: contractAddress,
            data: calldata,
        },
    });
});
