"use client";

import { useFormState } from "react-dom";

import { Button } from "@/components/ui/button";

import { FormInput } from "@/components/form/form-input";
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
        <FormInput label="Board title" id="title" errors={fieldErrors} />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
