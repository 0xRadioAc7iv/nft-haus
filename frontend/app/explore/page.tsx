"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-black text-white">
      <div className="hidden lg:block" style={{ backgroundColor: "#09032A" }}>
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b border-gray-800 px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-semibold">NFT Marketplace Dashboard</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border border-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">
              Welcome to your NFT Dashboard
            </h2>
            <p className="text-gray-300">
              This is the main content area. You can add your NFT marketplace
              features, statistics, and other relevant information here.
            </p>
          </div>
          <div className="border border-gray-800 rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Quick Stats</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {["Total NFTs", "Collections", "Sales", "Revenue"].map((stat) => (
                <div key={stat} className="bg-gray-900 p-4 rounded-lg">
                  <h3 className="font-medium text-gray-300">{stat}</h3>
                  <p className="text-2xl font-bold mt-2">0</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent
          side="left"
          className="w-[280px] sm:w-[380px] p-0"
          style={{ backgroundColor: "#09032A" }}
        >
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
