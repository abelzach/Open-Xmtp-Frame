/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "@/app/frames/frames";
 
const handleRequest = frames(async (ctx) => {
  let iAm: string | undefined;
  let txId: string | undefined;
 
  if (ctx.message) {
    iAm = (await ctx.message.walletAddress()) ?? "anonymous";
    txId = ctx.message?.transactionId;
  }
 
  return {
    image: (
      <div
        style={{
          display: "flex",
        }}
        tw="relative w-full h-full flex items-center justify-center text-white text-[48px] shadow-lg rounded-md overflow-hidden"
      >
        <img
          src="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png" // Replace with the path to your static image
          alt="Background"
          tw="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div
          style={{
            display: "flex",
            margin: "100px",
            fontWeight: '300'
          }}
          tw="relative z-10"
        >
            {iAm} ### {txId}
        </div>
      </div>
    ),
    imageOptions: {
      dynamic: true,
    },
    buttons: [
        <Button action="post" target="/">Go Back</Button>
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;

