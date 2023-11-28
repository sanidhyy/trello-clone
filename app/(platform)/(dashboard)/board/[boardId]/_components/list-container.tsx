"use client";

import type { ListWithCards } from "@/types";

type ListContainerProps = {
  data: ListWithCards[];
  boardId: string;
};

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return <div>ListContainer</div>;
};
