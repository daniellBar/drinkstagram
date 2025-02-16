import { z } from "zod";
import { drinkSchema } from "./consts";

export type DrinkFormData = z.infer<typeof drinkSchema>;