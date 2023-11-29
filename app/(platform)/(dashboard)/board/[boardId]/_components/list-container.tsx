"use client";

import { useEffect, useState } from "react";

import type { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
import { ListItem } from "./list-item";

type ListContainerProps = {
  data: ListWithCards[];
  boardId: string;
};

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  return (
    <ol className="flex gap-x-3 h-full">
      {orderedData.map((list, i) => {
        return <ListItem key={list.id} index={i} data={list} />;
      })}
      <ListForm />
      <div aria-hidden className="flex-shrink-0 w-1" />
    </ol>
  );
};
