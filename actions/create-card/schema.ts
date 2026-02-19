import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string({
      error: "Title is required.",
    })
    .min(3, {
      message: "Title is too short.",
    }),
  boardId: z.string(),
  listId: z.string(),
});
