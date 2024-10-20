import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function CardsContainer() {
  const bottomAuctionItems = [
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
    {
      id: 4,
      title: "Modern Art Painting",
      description: "18th porcelain masterpiece",
      currentBid: 2000,
      imageFileName: "two.jpg",
    },
    {
      id: 5,
      title: "Art Painting",
      description: "18th century porcelain masterpiece",
      currentBid: 2000,
      imageFileName: "three.jpg",
    },
  ];
  return (
    <div className="p-3">
      <div className="basis-2/3 border border-white bg-gray-900 rounded-lg">
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-semibold">🔥Hot Bids</span>
            <Button className="bg-purple-800">View all drops</Button>
          </div>
          <div className="flex gap-3 mt-3">
            {bottomAuctionItems.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col bg-black border border-white text-white"
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
    </div>
  );
}
