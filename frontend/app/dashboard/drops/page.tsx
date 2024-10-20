import * as React from "react";
import { Grid, Layers, Blocks, DollarSign, SortAsc } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "../../../components/ui/select";
import CardsContainer from "../../../components/CardsContainer";

export default function Drops() {
  return (
    <div className="bg-[#020118] text-white">
      <p className="p-4 font-semibold text-2xl">Explore gallery</p>
      <div className="flex flex-wrap gap-4 p-4">
        <Select>
          <SelectTrigger className="w-[200px] bg-black text-white rounded-full">
            <div className="flex items-center gap-2">
              <Grid className="h-4 w-4" />
              <span>All categories</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="art">Art</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="photography">Photography</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]  bg-black text-white rounded-full">
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4" />
              <span>Collections</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Collections</SelectLabel>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="trending">Trending</SelectItem>
              <SelectItem value="new">New</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]  bg-black text-white rounded-full">
            <div className="flex items-center gap-2">
              <Blocks className="h-4 w-4" />
              <span>Blockchain</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Blockchain</SelectLabel>
              <SelectItem value="ethereum">Ethereum</SelectItem>
              <SelectItem value="solana">Solana</SelectItem>
              <SelectItem value="polygon">Polygon</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]  bg-black text-white rounded-full">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span>Price range</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Price range</SelectLabel>
              <SelectItem value="0-100">$0 - $100</SelectItem>
              <SelectItem value="100-500">$100 - $500</SelectItem>
              <SelectItem value="500-1000">$500 - $1000</SelectItem>
              <SelectItem value="1000+">$1000+</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[200px]  bg-black text-white rounded-full ml-48">
            <div className="flex items-center gap-2">
              <SortAsc className="h-4 w-4" />
              <span>Price: Low to High</span>
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* //cards */}
      <CardsContainer />
    </div>
  );
}
