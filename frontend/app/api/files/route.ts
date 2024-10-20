import { NextResponse, NextRequest } from "next/server";
import { pinata } from "@/lib/config";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!data)
    return NextResponse.json({ msg: "Form Data Required" }, { status: 400 });

  if (!file)
    return NextResponse.json({ msg: "Image File required" }, { status: 400 });

  try {
    const uploadData = await pinata.upload.file(file);
    const url = await pinata.gateways.convert(uploadData.IpfsHash);

    const imageCID = url.split("/").pop();
    const imageIPFSURL = "http://ipfs.io/ipfs/" + imageCID;

    return NextResponse.json(imageIPFSURL, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
