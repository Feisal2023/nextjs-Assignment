import { z } from "zod";

const postSchema = z.object({
  title: z.string().min(3).max(2000),
  content: z.string().min(3).max(200),
});

export default postSchema;
