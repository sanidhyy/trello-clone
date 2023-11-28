"use client";

import { ListForm } from "./list-form";
import type { ListWithCards } from "@/types";

type ListContainerProps = {
  data: ListWithCards[];
  boardId: string;
};

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  return (
    <ol>
      <ListForm />
      <div aria-hidden className="flex-shrink-0 w-1" />
    </ol>
  );
};
