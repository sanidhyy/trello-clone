"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "@/actions/create-board/types";
import { CreateBoard } from "@/actions/create-board/schema";
import { createAuditLog } from "@/lib/create-audit-log";
import { ACTION, ENTITY_TYPE } from "@prisma/client";
import { increaseAvailableCount, hasAvailableCount } from "@/lib/org-limit";
import { checkSubscription } from "@/lib/subscription";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId, orgId } = auth();

  if (!userId || !orgId) {
    return {
      error: "Unauthorized",
    };
  }

  const canCreate = await hasAvailableCount();
  const isPro = await checkSubscription();

  if (!canCreate && !isPro) {
    return {
      error:
        "You have reached your limit of free boards. Please upgrade to create more.",
    };
  }

  const { title, image } = data;

  const [imageId, imageThumbUrl, imageFullUrl, imageLinkHtml, imageUserName] =
    image.split("|");

  if (
    !imageId ||
    !imageThumbUrl ||
    !imageFullUrl ||
    !imageLinkHtml ||
    !imageUserName
  ) {
    return {
      error: "Missing fields. Failed to create board.",
    };
  }

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
        orgId,
        imageId,
        imageThumbUrl,
        imageFullUrl,
        imageUserName,
        imageLinkHtml,
      },
    });

    // increase board count/decrase remaining board
    if (!isPro) await increaseAvailableCount();

    // create new activity log
    await createAuditLog({
      entityId: board.id,
      entityTitle: board.title,
      entityType: ENTITY_TYPE.BOARD,
      action: ACTION.CREATE,
    });
  } catch (error) {
    return {
      error: "Failed to create",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
