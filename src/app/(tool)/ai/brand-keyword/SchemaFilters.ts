import { z } from "zod";

export const filterSchemaObject = {
  brand: z.string().min(1, "This field is required"),
  source: z.string().min(1, "This field is required"),
  sort: z.string(),
};

export const filterDefaultValues = {
  brand: "se ranking",
  source: "us",
  sort: "volume",
};
