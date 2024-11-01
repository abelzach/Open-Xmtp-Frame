/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  let iAm: string | undefined;

  if (ctx.message) {
    iAm = (await ctx.message.walletAddress()) ?? "anonymous";
  }
  console.log(`Current user: ${iAm}`); 

  return {
    image: "https://raw.githubusercontent.com/abelzach/Color-Palette/main/frame1.jpg",
    imageOptions: {
      dynamic: true,
      headers: {
        "Cache-Control": "max-age=1",
      }
    },
    buttons: [<Button action="post" target="/gameDetails">Lets go!!</Button>],
  };
});

        // <img
        //   src="https://wallpapers.com/images/hd/kung-fu-panda-and-shifu-doing-push-ups-7v8t48684njolvd1.jpg"
        //   alt="Background"
        //   tw="absolute inset-0 w-full h-full object-cover opacity-80"
        // />
export const GET = handleRequest;
export const POST = handleRequest;
