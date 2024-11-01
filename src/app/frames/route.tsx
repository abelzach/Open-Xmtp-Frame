/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "@/app/frames/frames";
import { NextRequest } from "next/server";

const handler = frames(async (ctx) => {
  let iAm: string | undefined;
  const gameId = ctx.searchParams.id

  if (ctx.message) {
    iAm = (await ctx.message.walletAddress()) ?? "anonymous";
  }
  console.log(`Current user: ${iAm}`); 

  return {
    image: "https://raw.githubusercontent.com/abelzach/Color-Palette/main/frame1.jpg",
    imageOptions: {
      headers: {
        "Cache-Control": "max-age=1",
      }
    },
    buttons: [<Button action="post" target={{ pathname: "/gameDetails", query: {id: gameId}}}>Lets go!!</Button>],
  };
});

        // <img
        //   src="https://wallpapers.com/images/hd/kung-fu-panda-and-shifu-doing-push-ups-7v8t48684njolvd1.jpg"
        //   alt="Background"
        //   tw="absolute inset-0 w-full h-full object-cover opacity-80"
        // />
export const GET = handler;
export const POST = handler;
