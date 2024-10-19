"use client";

import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";

const projectId = "b9e5b9493a410bb8ac5286d7626de414";
const supportedChains: Chain[] = [base, baseSepolia];

export const config = getDefaultConfig({
  appName: "NFT Haus",
  projectId: projectId,
  chains: [base, baseSepolia],
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});
