"use client";

import { useState, useEffect, useRef, ElementRef } from "react";
import { useEventListener } from "usehooks-ts";
import { List } from "@prisma/client";

import { FormInput } from "@/components/form/form-input";

type ListHeaderProps = {
  data: List;
};

export const ListHeader = ({ data }: ListHeaderProps) => {
  const [title, setTitle] = useState(data.title);
  const [isEditing, setIsEditing] = useState(false);

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      formRef.current?.requestSubmit();
    }
  };

  useEventListener("keydown", onKeyDown);

  return (
    <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start gap-x-2">
      {isEditing ? (
        <form action="" className="flex-1 px-[2px]">
          <input
            type="hidden"
            id="id"
            name="id"
            value={data.id}
            hidden
            aria-hidden
          />
          <input
            type="hidden"
            id="boardId"
            name="boardId"
            value={data.boardId}
            hidden
            aria-hidden
          />
          <FormInput
            ref={inputRef}
            onBlur={() => {}}
            id="title"
            placeholder="Enter list title.."
            defaultValue={title}
            className="text-sm px-[7px] py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white"
          />
        </form>
      ) : (
        <div
          onClick={enableEditing}
          className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent cursor-text"
        >
          {data.title}
        </div>
      )}
    </div>
  );
};
