"use client";

import { useEffect, useState } from "react";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";

import type { ListWithCards } from "@/types";
import { ListForm } from "./list-form";
import { ListItem } from "./list-item";

type ListContainerProps = {
  data: ListWithCards[];
  boardId: string;
};

function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const ListContainer = ({ data, boardId }: ListContainerProps) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, type } = result;

    // if no destination
    if (!destination) return;

    // if dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    // user moves a list
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);
      // todo: trigger server action
    }

    // user moves a card
    if (type === "card") {
      let newOrderedData = [...orderedData];

      // source and destination list
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );

      const destinationList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destinationList) return;

      // check if cards exists on the source list
      if (!sourceList.cards) sourceList.cards = [];

      // check if cards exists on the destination list
      if (!destinationList.cards) destinationList.cards = [];

      // moving the card in the same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.cards,
          source.index,
          destination.index
        );

        reorderedCards.forEach((card, i) => {
          card.order = i;
        });

        sourceList.cards = reorderedCards;
        setOrderedData(newOrderedData);

        // todo: trigger server action
      }
      // user moves card to another list
      else {
        // remove card from the source list
        const [movedCard] = sourceList.cards.splice(source.index, 1);

        // assign the new list id to the moved card
        movedCard.listId = destination.droppableId;

        // add new card to the destination list
        destinationList.cards.splice(destination.index, 0, movedCard);

        sourceList.cards.forEach((card, i) => {
          card.order = i;
        });

        // update the order for each card in destination list
        destinationList.cards.forEach((card, i) => {
          card.order = i;
        });

        setOrderedData(newOrderedData);

        // TODO: trigger server action
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list" direction="horizontal">
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex gap-x-3 h-full"
          >
            {orderedData.map((list, i) => (
              <ListItem key={list.id} index={i} data={list} />
            ))}

            {provided.placeholder}

            <ListForm />
            <div aria-hidden className="flex-shrink-0 w-1" />
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};
