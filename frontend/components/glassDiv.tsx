import Image from "next/image";

export default function GlassDiv() {
  return (
    <div>
      <div
        className="relative h-[800px] w-[1600px] mx-auto  rounded-xl 
     backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-20"
      >
        <div className="flex flex-col justify-start items-start mt-12 ml-12 gap-3">
          <span className="text-5xl font-bold">Unveiling</span>
          <span className="text-5xl font-bold">NFT Masterpiece</span>
        </div>

        {/* NFT Card Component */}
        <div className="container mx-auto p-4 mt-5">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-2">
                  <Image
                    src="/one.jpg"
                    alt="Placeholder image for Card 1"
                    className="w-full h-56 object-cover rounded"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="p-4">
                  <span className="block text-sm font-medium text-gray-500 mb-1">
                    Description 1
                  </span>
                  <span className="block text-lg font-semibold text-gray-900">
                    Card 1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
