import * as z from "zod";

export const CreateGroups = z.object({
  title: z.string().min(5).max(130),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});

export const CreateBank = z.object({
  title: z.string().min(5).max(130),
});
