"use client";

import { useFormState } from "react-dom";

import { Button } from "@/components/ui/button";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/use-action";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log("SUCCESS: ", data);
    },
    onError: (error) => {
      console.log("ERROR: ", error);
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a board title"
          className="border border-black p-1"
          required
        />
      </div>

      {fieldErrors?.title ? (
        <div className="">
          {fieldErrors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
      <Button type="submit">Submit</Button>
    </form>
  );
};
