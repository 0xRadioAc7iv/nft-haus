import Image from "next/image";
import { Button } from "./ui/button";

export default function TopCreators() {
  // Data for top creators
  const creators = [
    {
      name: "Manav Gadhiya",
      username: "@radio_active",
      image: "/images/one.jpg",
    },
    {
      name: "Meet Pandya",
      username: "@meeet_pandya",
      image: "/images/one.jpg",
    },
    {
      name: "Jill Todkar",
      username: "@jilltodkar",
      image: "/images/one.jpg",
    },
    {
      name: "Nandan Pathak",
      username: "@nans_p@32",
      image: "/images/one.jpg",
    },
  ];

  return (
    <div className="basis-1/3 border border-purple-950 p-3 rounded-lg">
      <span className="text-2xl font-semibold">⭐ Top Creators</span>
      <div className="mt-3 flex flex-col gap-2">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 rounded-lg border bg-purple-500/10 backdrop-blur-md border-purple-950"
          >
            <div className="flex items-center gap-6">
              <Image
                src={creator.image}
                alt={`${creator.name}'s profile`}
                height={42}
                width={42}
                className="rounded-full"
              />
              <div className="flex flex-col py-2">
                <span className="text-sm">{creator.name}</span>
                <span className="text-xs text-gray-400">
                  {creator.username}
                </span>
              </div>
            </div>
            <Button className="rounded-full h-[40px] w-[90px] bg-purple-800/80 backdrop-blur-md">
              Add
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}