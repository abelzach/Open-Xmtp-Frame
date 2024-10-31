/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const handleRequest = frames(async (ctx) => {
  let iAm: string | undefined;

  if (ctx.message) {
    iAm = (await ctx.message.walletAddress()) ?? "anonymous";
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
          src="https://wallpapers.com/images/hd/kung-fu-panda-and-shifu-doing-push-ups-7v8t48684njolvd1.jpg"
          alt="Background"
          tw="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div
          style={{
            display: "flex",
            margin: "100px",
            fontWeight: '300',
            paddingBottom: '400px'
          }}
          tw="relative z-10 text-black font-extrabold"
        >
          Who can outlast the burn and push their limits to claim the title of
          push-up champ?
        </div>
      </div>
    ),
    imageOptions: {
      dynamic: true,
    },
    buttons: [<Button action="post" target="/gameDetails">Let's go!!</Button>],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
