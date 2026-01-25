import { z } from "zod";

export const filterSchemaObject = {
  scope: z.string(),
  target: z.string().min(1, "This field is required"),
  source: z.string().min(1, "This field is required"),
  engine: z.string(),
};

export const filterDefaultValues = {
  scope: "domain",
  target: "",
  source: "",
  engine: "ai-overview",
};
