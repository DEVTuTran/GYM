import { OperatingHours } from "models/Store";
import { DAY_OF_THE_WEEK, HOLIDAY_STATUS } from "constants/common";

export const isProduction = () => {
  return process.env.NODE_ENV == "production";
};
export const timeToNumericString = (time: string) => time.replace(":", "");

export const removeFalsyProperty = (query: { [key: string]: any }) => {
  const returnQuery: Record<string, string> = {};
  Object.keys(query).forEach((key) => {
    if (query[key] || typeof query[key] === "number")
      returnQuery[key] = query[key];
  });
  return returnQuery;
};

export const generateUEID = () => {
  let first = (Math.random() * 46656) | 0;
  let second = (Math.random() * 46656) | 0;

  return first + second;
};
