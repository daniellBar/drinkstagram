import { z } from "zod";

export const drinkSchema = z.object({
  name: z.string().nonempty("Name is required"),
  instructions: z.string().nonempty("Instructions are required"),
  ingredients: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[a-zA-Z0-9\s,]+$/.test(val),
      "Ingredients should only contain letters, numbers, and commas"
    )
    .transform((val) => {
      if (val) {
        return val.split(",").map((item) => item.trim());
      }
      return [];
    })
    .refine(
      (ingredients) => ingredients.length <= 15,
      "You can enter up to 15 ingredients."
    ),

  imgUrl: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Invalid URL format",
    }),
});

export const ingredientsInfoText =
  "Enter up to 15 ingredients, separated by commas (e.g., Vodka, Lime, Sugar, Ice)";
