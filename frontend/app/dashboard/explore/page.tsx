"use client";

import React from "react";
import { Search, Home, Settings, User } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CardsContainer from "../../../components/CardsContainer";

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
    <div className="bg-[#020113] text-white min-h-screen h-full flex flex-col">
      <div className="flex flex-col flex-grow bg-[#020113]">
        {/* Sticky Overview section */}
        <div className="border-b border-white p-3 flex justify-between sticky top-0 bg-black z-10">
          <div className="text-2xl font-bold">Overview</div>
          <div className="relative w-[460px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="search"
              className="w-full p-2 pl-12 text-sm text-white border rounded-full bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for transaction, creator, etc."
              required
            />
          </div>
          <div>
            <ConnectButton />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-grow overflow-y-auto bg-black">
          {/* Featured NFT and Account Summary */}
          <div className="flex p-3 w-full items-stretch gap-3">
            <div className="basis-2/3 border border-white p-4 flex gap-2 bg-[#130a3b] rounded-lg">
              <div className="basis-1/2 border border-white rounded-xl">
                <Image
                  src="/one.jpg"
                  alt="nft"
                  height={880}
                  width={480}
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="basis-1/2 border border-white p-4">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">
                    SuperHero Collection
                  </span>
                  <span>5567</span>
                </div>
                <div className="flex gap-3 mt-3">
                  <Image
                    src="/two.jpg"
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
                <div className="mt-4">
                  <span className="text-xs">CURRENT BID</span>
                  <div className="flex justify-between">
                    <div>123456</div>
                    <div>123456</div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <Button variant="outline" className="bg-purple-900">
                    View ArtWork
                  </Button>
                  <Button variant="outline" className="bg-purple-900">
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>
            <div className="basis-1/3 border border-white p-4 rounded-lg flex flex-col bg-[#2d16a5]">
              <span>My Account</span>
              <span className="text-xs mt-7">Total Balance</span>
              <span className="text-4xl mt-1">$50,460.00</span>
              <span className="text-xs mt-2">30.45% Up than last month</span>
              <div className="flex justify-between mt-10">
                <div className="flex flex-col items-center justify-center w-24 h-18 bg-[#3b18f8] text-white rounded-xl p-2">
                  <Home className="w-6 h-6" />
                  <span className="text-sm opacity-50">Home</span>
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-18 bg-[#3b18f8] text-white rounded-xl p-2">
                  <User className="w-6 h-6" />
                  <span className="text-sm opacity-50">Profile</span>
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-18 bg-[#3b18f8] text-white rounded-xl p-2">
                  <Settings className="w-6 h-6" />
                  <span className="text-sm opacity-50">Settings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hot Bids and Top Creators */}
          <div className="border-t border-white p-3 flex gap-3">
            <div className="basis-2/3 border border-white bg-black rounded-lg">
              <div className="p-3">
                <span className="text-2xl font-semibold">🔥Hot Bids</span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                  {auctionItems.map((item) => (
                    <Card
                      key={item.id}
                      className="flex flex-col bg-[#130a3b] border border-white text-white"
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
                        <Button className="w-full">Place Bid</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            <div className="basis-1/3 border border-white p-3 bg-black rounded-lg">
              <span className="text-2xl">⭐ Top Creators</span>
              <div className="mt-3 flex flex-col gap-2 bg-[#130a3b]">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 border border-white rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src="/three.jpg"
                        alt="profile"
                        height={40}
                        width={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm">Vaishnavi Patil</span>
                        <span className="text-xs text-gray-400">
                          @vai_shhh27
                        </span>
                      </div>
                    </div>
                    <Button className="rounded-full h-[40px] w-[90px] bg-[#2b08ee]">
                      Add
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards container */}
          <CardsContainer />
        </div>

        {/* table */}
      </div>
    </div>
  );
}
