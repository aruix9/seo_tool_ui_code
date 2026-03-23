import { z } from "zod";

export const filterSchemaObject = {
  target: z.string().min(1, "This field is required"),
  source: z.string().min(1, "This field is required"),
};

export const filterDefaultValues = {
  scope: "domain",
  target: "",
  source: "",
  engine: "ai-overview",
};
