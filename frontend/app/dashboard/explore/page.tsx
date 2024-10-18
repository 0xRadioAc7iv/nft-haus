import React from "react";
import { Search, Home, Settings, User } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Image from "next/image";

export default function Explore() {
  return (
    <div className="bg-black text-white min-h-screen m-0 p-0 ">
      {/* the flex */}
      <div className="border border-white p-3 flex justify-between">
        <div className="text-2xl font-bold">Overview</div>
        <div>
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
        </div>
        <div>
          <Button className="bg-purple-700 text-white font-bold rounded-xl">
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* //The seconf flex */}
      <div className="flex p-3 w-full items-stretch gap-3">
        <div className="basis-2/3 border border-white p-4 flex gap-3 bg-slate-400 rounded-lg">
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
            {/* //second */}
            <div className="flex gap-3 mt-3">
              <div>
                <Image
                  src="/two.jpg"
                  alt="profile-image"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Vaishnavi Patil</span>
                <span className="text-xs">@vai_shhh27</span>
              </div>
            </div>

            {/* third */}
            <div className="mt-4">
              <span className="text-xs ">CURRENT BID</span>
              <div className="flex justify-between">
                <div>123456</div>
                <div>123456</div>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <Button>View ArtWork</Button>
              <Button className="bg-purple-900">Place Bid</Button>
            </div>
          </div>
        </div>

        <div className="basis-1/3 border border-white p-4 rounded-lg flex flex-col">
          <span>My Account</span>

          <span className="text-xs mt-7">Total Balance</span>
          <span className="text-4xl mt-1">$50,460.00</span>
          <span className="text-xs mt-2">30.45% Up than last month</span>

          <div className="flex justify-between mt-10">
            <div className="flex flex-col items-center justify-center w-24 h-18 bg-purple-600 text-white rounded-xl p-2">
              <Home className="w-6 h-6 " />
              <span className="text-sm opacity-50">Home</span>
            </div>

            {/* Second Div */}
            <div className="flex flex-col items-center justify-center w-24 h-18 bg-blue-600 text-white rounded-xl p-2">
              <User className="w-6 h-6" />
              <span className="text-sm  opacity-50">Profile</span>
            </div>

            {/* Third Div */}
            <div className="flex  flex-col items-center justify-center w-24 h-18 bg-green-600 text-white rounded-xl p-2">
              <Settings className="w-6 h-6 " />
              <span className="text-sm opacity-50">Settings</span>
            </div>
          </div>
        </div>
      </div>

      {/* the other flex */}
      <div className="border border-white p-3 flex gap-3">
        <div className="basis-2/3 border border-white">Vaish</div>
        <div className="basis-1/3 border border-white p-2">
          <span className="text-2xl">⭐ Top Creators</span>

          <div className="border border-white rounded-sm mt-3 flex  justify-center  items-center ">
            {/* //the profile div */}
            <div className="flex flex-col gap-2 justify-center">
              {/* First Item */}
              <div className="flex border border-white items-center gap-12 justify-center mt-2">
                <div className="flex gap-3 items-center p-3">
                  <div className="border border-white flex items-center">
                    <Image
                      src="/three.jpg"
                      alt="profile"
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Vaishnavi Patil</span>
                    <span className="text-xs">vai_shhh27</span>
                  </div>
                </div>
                <div>
                  <Button className="rounded-full h-[40px] w-[90px] bg-purple-800">
                    Add
                  </Button>
                </div>
              </div>

              <div className="flex border border-white items-center gap-12 justify-center">
                <div className="flex gap-3 items-center p-3">
                  <div className="border border-white flex items-center">
                    <Image
                      src="/three.jpg"
                      alt="profile"
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Vaishnavi Patil</span>
                    <span className="text-xs">vai_shhh27</span>
                  </div>
                </div>
                <div>
                  <Button className="rounded-full h-[40px] w-[90px] bg-purple-800">
                    Add
                  </Button>
                </div>
              </div>

              <div className="flex border border-white items-center gap-12 justify-center">
                <div className="flex gap-3 items-center p-3">
                  <div className="border border-white flex items-center">
                    <Image
                      src="/three.jpg"
                      alt="profile"
                      height={40}
                      width={40}
                      className="rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm">Vaishnavi Patil</span>
                    <span className="text-xs">vai_shhh27</span>
                  </div>
                </div>
                <div>
                  <Button className="rounded-full h-[40px] w-[90px] bg-purple-800">
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
