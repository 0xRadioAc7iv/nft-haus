'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function CreateNft() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#020113] px-8 pb-5">
      <div className="text-white">
        <h2 className="text-4xl/loose">Create an NFT</h2>
        <h3>
          Once your item is minted you will not be able to change any of its
          information.
        </h3>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-32 mt-8">
        <div className="w-full md:w-1/2">
          <label
            htmlFor="imageUpload"
            className="w-full h-96 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer flex items-center justify-center text-white"
          >
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <div className="flex flex-col items-center gap-2">
                <div className=""><IoCloudUploadOutline /></div>
                <div className="text-gray-400">Choose or drag and drop an image here</div>
              </div>
            )}
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <label htmlFor="name" className="text-white">Name</label>
            <Input
              id="name"
              type="text"
              placeholder="Name you NFT"
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="supply" className="text-white">Supply</label>
            <Input
              id="supply"
              type="text"
              placeholder="1"
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="desc" className="text-white">Description</label>
            <Textarea
              id="desc"
              placeholder="Enter a description"
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>
          
          <div className="mb-8">
            <label htmlFor="link" className="text-white">External link</label>
            <Input
              id="link"
              type="link"
              placeholder="https://examplelink/home"
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>
          <div className="flex">
            <Button className="bg-gray-700">Create</Button>
          </div>
        </div>
      </div>
    </div>
  );
}