import { Chain, createPublicClient, http } from "viem";

export function appURL() {
  return process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
    : "http://localhost:3000";
}

export function getPublicClient(chain: Chain) {
    return createPublicClient({
        chain,
        transport: http(),
    });
}
