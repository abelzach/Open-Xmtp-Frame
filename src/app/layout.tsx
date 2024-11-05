import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";
import { appURL } from "@/lib/util";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Challengers",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        appURL(),
      ).toString(),
    ),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
