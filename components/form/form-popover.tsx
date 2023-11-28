"use client";

import { X } from "lucide-react";
import { toast } from "sonner";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { FormPicker } from "@/components/form/form-picker";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

type FormPopoverProps = {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset,
}: FormPopoverProps) => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      toast.success("Board created.");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        className="w-80 pt-3"
        side={side}
        sideOffset={sideOffset}
      >
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Create board
        </div>

        <PopoverClose asChild>
          <Button
            variant="ghost"
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neutral-600"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>

        <form action={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board title"
              type="text"
              errors={fieldErrors}
            />
          </div>

          <FormSubmit className="w-full">Create</FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
