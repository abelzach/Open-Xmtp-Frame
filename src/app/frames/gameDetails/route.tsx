/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "@/app/frames/frames";

const handleRequest = frames(async (ctx) => {
  let iAm: string | undefined;

  if (ctx.message) {
    iAm = (await ctx.message.walletAddress()) ?? "anonymous";
  }
  console.log(`Current user: ${iAm}`); 

  const contenders = [
    {
      name: "Contender 1",
      strength: "8/10",
      endurance: "7/10",
      pushUpCount: "150+",
    },
    {
      name: "Contender 2",
      strength: "9/10",
      endurance: "8/10",
      pushUpCount: "180+",
    },
  ];

  return {
    image: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          position: "relative",
          width: "100%",
          gap: "20px",
          height: "100%",
        }}
        tw="bg-gray-900 text-white text-[24px] shadow-lg rounded-md overflow-hidden"
      >
        

        {contenders.map((contender, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "20px",
              width: "40%",
              marginLeft: index === 0 ? "5px" : "0",
              marginRight: index === 1 ? "5px" : "0",
              borderRadius: "8px",
              textAlign: "center"
            }}
            tw="flex flex-col items-center"
          >
            <h2 tw="text-4xl font-semibold mb-4">{contender.name}</h2>
            <hr tw="w-3/4 border-t-2 border-white mb-4" />
            <p tw="text-3xl mb-2">Strength: {contender.strength}</p>
            <p tw="text-3xl mb-2">Endurance: {contender.endurance}</p>
            <p tw="text-3xl mb-2">Push-up Count: {contender.pushUpCount}</p>
          </div>
        ))}
      </div>
    ),
    imageOptions: {
      width: 100,
      height: 100,
    },
    buttons: [
        <Button action="post" target="/">Go Back</Button>,
        <Button action="post" target="/promoteChallenger">Promote</Button>
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;

// <img
//           src="https://mrwallpaper.com/images/hd/kung-fu-panda-and-shifu-training-together-7tjh169g71i8dhl4.jpg"
//                         alt="Background"
//                     tw="absolute w-full h-full object-cover opacity-80"
//                             />

