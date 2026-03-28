import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { BacklinkDataType } from "../../types/type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(num);
};

export const sortedAuditResults = (
  data: { [key: string]: BacklinkDataType },
  keyType: keyof BacklinkDataType,
) => {
  const entries = Object.entries(data).sort(
    (a, b) => Number(b[1][keyType]) - Number(a[1][keyType]),
  );
  return Object.fromEntries(entries);
};

export const checkGap = (
  url: string,
  mainUrl: string,
  data: { [key: string]: BacklinkDataType },
) => {
  const urVal = Number(data[mainUrl].dofollow_refdomains);
  const compVal = Number(data[url].dofollow_refdomains);
  const gap = urVal - compVal;
  const glt = gap > 1 ? true : false;
  const gapPercent =
    (gap > 1
      ? (urVal - compVal) / ((urVal + compVal) / 2)
      : (compVal - urVal) / ((urVal + compVal) / 2)) * 100;

  return [gapPercent.toFixed(2), glt];
};

export const noLinksRequired = (
  mainUrl: string,
  data: { [key: string]: BacklinkDataType },
) => {
  let noLinksRequired = "";
  const sortedUrls = Object.keys(data);
  const yourPosition = sortedUrls.indexOf(mainUrl);

  if (yourPosition === 1) {
    noLinksRequired = String(
      data[sortedUrls[0]].dofollow_refdomains -
        data[mainUrl].dofollow_refdomains,
    );
  } else if (yourPosition > 1) {
    noLinksRequired = String(
      data[sortedUrls[0]].dofollow_refdomains -
        data[mainUrl].dofollow_refdomains,
    );
  }
  return Number(noLinksRequired).toLocaleString("en-IN");
};

export const normalizeTarget = function (url = "", mode = "host") {
  let result = url.trim().toLowerCase();

  if (mode === "host") {
    result = result.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }

  return result;
};
