import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { unsplash } from "@/lib/unsplash";
import { defaultImages } from "@/constants/images";

export async function GET() {
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId)
      return new NextResponse("Unauthorized", { status: 401 });

    const result = await unsplash.photos.getRandom({
      collectionIds: ["317099"],
      count: 9,
    });

    if (result && result.response) {
      const images = Array.isArray(result.response)
        ? result.response
        : [result.response];

      return NextResponse.json(images);
    }

    console.error("Failed to get images from Unsplash.");
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json(defaultImages);
}
