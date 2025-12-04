import { z } from "zod";

export const filterSchemaObject = {
  scope: z.string(),
  target: z.string(),
  source: z.string(),
  engine: z.string(),
};

export const filterDefaultValues = {
  scope: "domain",
  target: "flexiloans.com",
  source: "us",
  engine: "ai-overview",
};
