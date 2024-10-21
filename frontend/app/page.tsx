"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const targetDivRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(bgRef.current, {
      x: 70,
      y: 620,
      scale: 0.5, 
      rotate: 90, 
      scrollTrigger: {
        trigger: containerRef.current,
        endTrigger: targetDivRef.current,
        start: "top top", 
        end: "bottom bottom", 
        scrub: 2, 
      },
    });
  }, []);

  const handleExplore = () => {
    router.push("dashboard/explore");
  };

  return (
    <div
      ref={containerRef}
      className="bg-[#020113] text-white overflow-x-hidden"
    >
      <Navbar />

      <div className="relative w-full h-screen">
        {/* Background Image */}
        <div
          ref={bgRef}
          className="absolute inset-0 z-20 ml-72 mt-9 origin-top-left" // Higher z-index (z-20) to keep it above other elements
        >
          <Image
            src="/purple.svg"
            alt="bg-image"
            height={1200}
            width={1200}
            objectFit="cover"
            quality={100}
            className="ml-96"
            style={{
              filter: "drop-shadow(0 0 20px rgba(128, 0, 128, 0.8))", // Purple glow effect
            }}
          />
        </div>

        {/* Text Overlay */}
        <div className="relative z-30 flex justify-start h-full max-w-6xl mx-auto pt-24 ml-10">
          <div className="flex flex-col gap-2">
            <span className="text-8xl font-bold bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text block">Discover, Trade</span>
            <span className="text-8xl font-bold bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text block">and Mint</span>
            <span className="text-8xl font-bold bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 text-transparent bg-clip-text block">Unique Digital Assets</span>
            <button
              className="p-4  w-[210px] text-xl font-bold text-gray-300 rounded-lg mt-10 bg-purple-800/80 backdrop-blur-md border border-purple-900"
              onClick={handleExplore}
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Div to move the image into */}
      <div
        ref={targetDivRef}
        className="w-[1670px] ml-3  border h-[600px] mt-20 flex items-center rounded-lg z-10 bg-purple-500/10 backdrop-blur-md border-purple-950" // Lower z-index (z-10) to keep it behind the image
      >
        <div className="flex flex-col max-w-lg mx-auto gap-6 mr-32">
          <span className="text-2xl font-semibold text-gray-200">What is NFT-Haus?</span>
          <span className="text-sm text-gray-200">
          At NFT-Haus, we empower local artists by providing a seamless platform to showcase, sell, and gain recognition for their creative work in the digital world. <br/><br/>Here’s why you should choose NFT-Haus:<br/><br/>

Support Local Talent: NFT-Haus is dedicated to elevating artists from your community, giving them the opportunity to gain visibility and expand their audience globally.<br/><br/>

Ownership & Royalties: Artists retain ownership of their digital creations and earn royalties on secondary sales, ensuring that their hard work continues to pay off.<br/><br/>

Easy-to-Use Platform: Whether you’re an artist or a collector, our platform is user-friendly, making it simple to mint, trade, and buy NFTs without any prior technical knowledge.<br/><br/>

Secure & Transparent: Built on blockchain technology, NFT-Haus guarantees the authenticity and provenance of every piece, offering collectors confidence in their purchases.<br/><br/>

Community-Centric: We believe in fostering a thriving community of artists, collectors, and fans. NFT-Haus is more than a marketplace—it’s a space for collaboration, creativity, and growth.<br/><br/>
          </span>
        </div>
      </div>

      {/* Additional content to ensure scrollability */}
      <div className="h-screen bg-[#020113]">
        <div className="flex flex-col items-center mt-36 gap-10">
          <span className="text-4xl font-bold text-gray-400">The Heading</span>
          <div className="flex gap-4">
            <Image src="/fl-1.svg" alt="card-1" height={330} width={330} />
            <Image src="/fl-2.svg" alt="card-1" height={330} width={330} />
            <Image src="/fl-3.svg" alt="card-1" height={330} width={330} />
          </div>
        </div>
      </div>


      <div className="ml-20 flex flex-col gap-5 mb-10 pt-8">
        <span className="text-xl font-bold text-gray-400">Why NFT Haus?</span>
        <span className="text-sm text-gray-200 ">NFT-Haus is more than just a marketplace—it’s a movement to uplift and empower local artists by bringing their art into the digital realm.<br/> Here’s why NFT-Haus stands out:<br/>

        ✦  Empowering Local Artists: We focus on supporting artists in your community, giving them a global platform to showcase their creativity.<br/>

        ✦  Artist-Centric Royalties: Artists retain full ownership of their work and earn royalties with every future sale, ensuring long-term benefits.<br/>

        ✦  Simple & Accessible: No technical knowledge? No problem. NFT-Haus is designed to be user-friendly for both creators and collectors.<br/>
 
        ✦  Transparent & Secure: Built on robust blockchain technology, we ensure all transactions are safe, and every artwork’s authenticity is verified.<br/>

        ✦  Community & Growth: NFT-Haus fosters a vibrant, collaborative community where artists and collectors can thrive together.</span>
      </div>

      <span className="flex items-center justify-center text-4xl pt-20 font-bold text-gray-300 mb-36">Join NFT-Haus to celebrate and support local artistry in a global digital space!</span>
    </div>

    
  );
}
