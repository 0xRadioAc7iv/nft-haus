"use client";

import React from "react";
import { Search, Home, Settings, User } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CardsContainer from "../../../components/CardsContainer";
import TopCreators from "../../../components/TopCreators";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function Explore() {
  const auctionItems = [
    {
      id: 1,
      title: "Vintage Watch",
      description: "A rare collector's timepiece",
      currentBid: 1000,
      imageFileName: "three.jpg",
    },
    {
      id: 2,
      title: "Modern Art Painting",
      description: "Abstract piece by emerging artist",
      currentBid: 1500,
      imageFileName: "two.jpg",
    },
    {
      id: 3,
      title: "Antique Vase",
      description: "18th porcelain masterpiece",
      currentBid: 2000,
      imageFileName: "three.jpg",
    },
  ];

  return (
    <div className="bg-[#020113] text-gray-200 min-h-screen h-full flex flex-col">
      <div className="flex flex-col flex-grow bg-[#020113]">
        {/* Sticky Overview section */}
        <div className="border-b border-gray-700 p-3 flex justify-between sticky top-0 bg-[#020113] z-10">
          <div className="text-2xl font-bold">Overview</div>
          <div className="relative w-[460px] ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-200" />
            </div>
            <input
              type="search"
              className=" backdrop-blur-md border border-purple-800 bg-purple-950/60 w-full p-2 pl-12 text-sm text-whiterounded-full rounded-full placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for transaction, creator, etc."
              required
            />
          </div>
          <div>
            <ConnectButton />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto bg-purple-">
          {/* Featured NFT and Account Summary */}
          <div className="flex p-3 w-full items-stretch gap-3">
            <div className="basis-2/3 border p-4 flex gap-5 bg-purple-500/10 backdrop-blur-md border-purple-950 rounded-lg">
              <div className="basis-1/2 rounded-xl">
                <Image
                  src="/images/one.jpg"
                  alt="nft"
                  height={880}
                  width={480}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="basis-1/2 ">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">
                    SuperHero Collection
                  </span>
                  <span>5567</span>
                </div>
                <div className="flex gap-3 mt-3">
                  <Image
                    src="/images/two.jpg"
                    alt="profile-image"
                    height={40}
                    width={40}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm">Vaishnavi Patil</span>
                    <span className="text-xs">@vai_shhh27</span>
                  </div>
                </div>
                <div className="mt-6">
                  <span className="text-xs">CURRENT BID</span>
                  <div className="flex justify-between">
                    <div>123456</div>
                    <div>123456</div>
                  </div>
                </div>
                <div className="flex justify-between mt-10">
                  <Button
                    variant="outline"
                    className="bg-purple-800/80 backdrop-blur-md border border-purple-900"
                  >
                    View ArtWork
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-purple-800/80 backdrop-blur-md border border-purple-900"
                  >
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="basis-1/3 border border-purple-950 p-4 rounded-lg flex flex-col bg-purple-800/60 backdrop-blur-md">
              <span>My Account</span>
              <span className="text-xs mt-7">Total Balance</span>
              <span className="text-4xl mt-1">$50,460.00</span>
              <span className="text-xs mt-2">30.45% Up than last month</span>
              <div className="flex justify-between mt-10">
                <div className="flex flex-col items-center justify-center w-24 h-16 backdrop-blur-md border border-purple-800 bg-purple-950/60 text-white rounded-xl p-2">
                  <Home className="w-6 h-6" />
                  <span className="text-sm opacity-50 text-gray-300">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-16 backdrop-blur-md bg-purple-950/60 border border-purple-800 text-white rounded-xl p-2">
                  <User className="w-6 h-6" />
                  <span className="text-sm opacity-50">Profile</span>
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-16 backdrop-blur-md bg-purple-950/60 border border-purple-800 text-white rounded-xl p-2">
                  <Settings className="w-6 h-6" />
                  <span className="text-sm opacity-50">Settings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hot Bids and Top Creators */}
          <div className=" p-3 flex gap-3">
            <div className="basis-2/3  bg-[#020113] rounded-lg">
              <div className="p-1 border border-purple-950 rounded-lg">
                <span className="text-2xl font-semibold text-gray-200">
                  🔥Hot Bids
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                  {auctionItems.map((item) => (
                    <Card
                      key={item.id}
                      className="flex flex-col  border bg-purple-500/10 backdrop-blur-md border-purple-950 text-gray-300"
                    >
                      <div className="relative h-40 w-full flex rounded-xl items-center justify-center overflow-hidden pt-1 mt-2">
                        <Image
                          src={`/images/${item.imageFileName}`}
                          alt={item.title}
                          width={280}
                          height={200}
                          objectFit="contain"
                          className="rounded-xl p-2"
                        />
                      </div>
                      <CardHeader className="py-2 px-3">
                        <CardTitle className="text-md">{item.title}</CardTitle>
                        <CardDescription className="text-xs text-gray-400">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="py-1 px-3">
                        <p className="font-semibold text-sm">
                          Current bid: ${item.currentBid.toLocaleString()}
                        </p>
                      </CardContent>
                      <CardFooter className="mt-auto pt-2 px-3 pb-3">
                        <Button className="w-full bg-purple-800/80 backdrop-blur-md">
                          Place Bid
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
           {/* //top creators */}
           <TopCreators/>
          </div>

          {/* Cards container */}
          <CardsContainer />
        </div>

        {/* table */}
      </div>
    </div>
  );
}
