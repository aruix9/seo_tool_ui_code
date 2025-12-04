import { z } from "zod";

export const filterSchemaObject = {
  scope: z.string(),
  target: z.string().min(1, "This field is required"),
  source: z.string().min(1, "This field is required"),
  sort: z.string(),
};

export const filterDefaultValues = {
  target: "",
  scope: "domain",
  source: "",
  sort: "volume",
};
