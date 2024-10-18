"use client";

import Navbar from "../components/Navbar";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const bgRef = useRef(null);
  const containerRef = useRef(null);
  const targetDivRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(bgRef.current, {
      x: 70,
      y: 620,
      scale: 0.5, // Shrink the image to 50% of its original size
      rotate: 90, // Rotate the image by 90 degrees as it moves down
      scrollTrigger: {
        trigger: containerRef.current,
        endTrigger: targetDivRef.current,
        start: "top top", // When the top of the container hits the top of the viewport
        end: "bottom bottom", // When the bottom of the container hits the bottom of the viewport
        scrub: 2, // Scrubbing effect, increase for slower animation
        markers: true, // For debugging, remove in production
      },
    });
  }, []);

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
            <span className="text-9xl font-bold">Discover, Trade</span>
            <span className="text-9xl font-bold">and Mint</span>
            <span className="text-9xl font-bold">Unique Digital Assets</span>
          </div>
        </div>
      </div>

      {/* Div to move the image into */}
      <div
        ref={targetDivRef}
        className="w-[1670px] ml-3 backdrop-blur-md bg-slate-500/30 border border-white/30 h-[600px] mt-20 flex items-center rounded-lg z-10" // Lower z-index (z-10) to keep it behind the image
      >
        <div className="flex flex-col max-w-lg mx-auto gap-6 mr-32">
          <span className="text-3xl font-semibold">Our NFT Collections</span>
          <span className="text-xl">
            gdfjasnfmasnckakfasndmascmbasmbfjashmas cmaskhfasbcmsbjfhaj anshjdas
            mashjsa kasyda jayda jsya mshadnma akwhwa kweyrbsf aneruwej ashuwer
            wmchjuerwe fjwyerhwe fwjheruweb fmehrejwr wefjwehrjw rfwejhrwe f
            wejhruwe4we fsjehrjwer efjwehru
          </span>
          <span className="text-xl">
            gdfjasnfmasnckakfasndmascmbasmbfjashmas cmaskhfasbcmsbjfhaj anshjdas
            mashjsa kasyda jayda jsya mshadnma akwhwa kweyrbsf aneruwej ashuwer
            wmchjuerwe fjwyerhwe fwjheruweb fmehrejwr wefjwehrjw rfwejhrwe f
            wejhruwe4we fsjehrjwer efjwehru
          </span>
        </div>
      </div>

      {/* Additional content to ensure scrollability */}
      <div className="h-screen bg-[#020113]"></div>
    </div>
  );
}
