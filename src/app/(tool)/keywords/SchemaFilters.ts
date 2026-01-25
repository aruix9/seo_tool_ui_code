import { z } from "zod";

export const filterSchemaObject = {
  sort: z.string(),
  keyword: z.string(),
  source: z.string(),
};

export const filterDefaultValues = {
  keyword: "",
  source: "",
  sort: "",
};
