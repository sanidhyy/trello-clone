import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ cardId: string }> },
) {
  try {
    const { cardId } = await params;
    const { userId, orgId } = auth();

    if (!userId || !orgId)
      return new NextResponse("Unauthorized", { status: 401 });

    const card = await db.card.findUnique({
      where: {
        id: cardId,
        list: {
          board: {
            orgId,
          },
        },
      },
      include: {
        list: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
