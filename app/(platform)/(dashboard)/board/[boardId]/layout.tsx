import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { BoardNavbar } from "./_components/board-navbar";
import { db } from "@/lib/db";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ boardId: string }>;
}) {
  const { boardId } = await params;
  const { orgId } = auth();

  if (!orgId) return { title: "Board" };

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ boardId: string }>;
}) => {
  const { boardId } = await params;
  const { orgId } = auth();

  if (!orgId) redirect("/select-org");

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  if (!board) notFound();

  return (
    <div
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      className="relative h-full bg-no-repeat bg-cover bg-center"
    >
      <BoardNavbar data={board} />
      <div aria-hidden className="absolute inset-0 bg-black/10" />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
