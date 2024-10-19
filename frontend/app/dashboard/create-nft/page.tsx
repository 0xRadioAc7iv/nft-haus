"use client";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import classNames from "classnames";

export default function CreateNft() {
  const [name, setName] = useState<string>("");
  const [ticker, setTicker] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.substring(0, 5) === "image") {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file);
    } else {
      setSelectedImage(null);
      alert("Please select an image file");
    }
  };

  const resetInputs = () => {
    setName("");
    setTicker("");
    setDescription("");
    setSelectedImage(null);
    setImageFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const deployNFT = async () => {
    if (!name) {
      alert("Please enter a name!");
      return;
    }

    if (!ticker) {
      alert("Please enter a ticker!");
      return;
    }

    if (!description) {
      alert("Please enter a Description!");
      return;
    }

    if (!imageFile) {
      alert("Please upload an image!");
      return;
    }

    try {
      const data = new FormData();
      data.set("file", imageFile as File);

      const uploadRequest = await fetch("/api/files", {
        method: "POST",
        body: data,
      });

      if (!uploadRequest.ok) {
        throw new Error("Uploading the file failed.");
      }

      const imageURI = await uploadRequest.json();
    } catch (error) {
      console.log(error);
      alert(
        "Trouble uploading the file to IPFS. Please contact the website owner."
      );
    }

    // Call createNewNFT() from NFTFactory Contract
    // Display Deployed NFT Contract Address
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
      <div className="flex flex-row md:flex-row gap-12 mt-8">
        <div
          className={classNames(
            "w-1/2 rounded-xl flex justify-center items-center hover:cursor-pointer relative",
            {
              "border-2 border-dashed": !selectedImage,
            }
          )}
          onClick={handleClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
            required
          />
          {selectedImage ? (
            <div className="w-full h-full relative">
              <Image
                src={selectedImage}
                alt="Uploaded image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-xl"
              />
            </div>
          ) : (
            <div className="text-white">Click to upload an image</div>
          )}
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-8">
            <label htmlFor="name" className="text-white">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Name your NFT"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="ticker" className="text-white">
              Ticker
            </label>
            <Input
              id="ticker"
              type="text"
              placeholder="NFT Ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="desc" className="text-white">
              Description
            </label>
            <Textarea
              id="desc"
              placeholder="Enter a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-transparent border-gray-600 text-white hover:border-gray-400 mt-2"
            />
          </div>
          <div className="flex gap-2">
            <Button className="bg-gray-700" onClick={() => resetInputs()}>
              Reset
            </Button>
            <Button className="bg-gray-700" onClick={() => deployNFT()}>
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
