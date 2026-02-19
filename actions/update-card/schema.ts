import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z
      .string({
        error: "Description is required.",
      })
      .min(3, {
        message: "Description is too short.",
      }),
  ),
  title: z.optional(
    z
      .string({
        error: "Title is required.",
      })
      .min(3, {
        message: "Title is too short.",
      }),
  ),
  id: z.string(),
});
