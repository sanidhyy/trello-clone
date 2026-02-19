import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { ENTITY_TYPE } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  {
    params,
  }: {
    params: Promise<{
      cardId: string;
    }>;
  },
) {
  try {
    const { cardId } = await params;
    const { userId, orgId } = auth();

    if (!userId || !orgId)
      return new NextResponse("Unauthorized", { status: 401 });

    const auditLogs = await db.auditLog.findMany({
      where: {
        orgId,
        entityId: cardId,
        entityType: ENTITY_TYPE.CARD,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 3,
    });

    return NextResponse.json(auditLogs);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
