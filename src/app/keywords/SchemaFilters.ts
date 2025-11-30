import { z } from "zod";

export const filterSchemaObject = {
  sort: z.string(),
  source: z.string(),
  keyword: z.string(),
  sortOrder: z.string(),
  serpFeature: z.string(),

  limit: z.number(),
  cpcTo: z.number(),
  offset: z.number(),
  cpcFrom: z.number(),
  volumeTo: z.number(),
  volumeFrom: z.number(),
  difficultyTo: z.number(),
  competitionTo: z.number(),
  difficultyFrom: z.number(),
  keywordCountTo: z.number(),
  competitionFrom: z.number(),
  keywordCountFrom: z.number(),
  charactersCountTo: z.number(),
  charactersCountFrom: z.number(),

  historyTrend: z.boolean(),
};

export const filterDefaultValues = {
  source: "us",
  keyword: "avocado",
  sort: "keyword",
  sortOrder: "asc",
  serpFeature: "sge,images",

  cpcTo: 0,
  limit: 10,
  offset: 0,
  cpcFrom: 100,
  volumeTo: 100,
  volumeFrom: 100,
  difficultyTo: 100,
  competitionTo: 100,
  difficultyFrom: 100,
  keywordCountTo: 100,
  competitionFrom: 100,
  keywordCountFrom: 100,
  charactersCountTo: 50,
  charactersCountFrom: 15,

  historyTrend: true,
};
