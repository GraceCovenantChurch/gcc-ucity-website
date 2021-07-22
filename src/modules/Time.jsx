import date from "date-and-time";
import { DateTime } from "luxon";

export const formatTime = (time) => {
  return DateTime.fromJSDate(new Date(time)).toFormat("h:mma ZZZZ");
};

export const formatTimeOld = (time) => {
  console.log(date.format(new Date(time), "h:mmA", true));
  return date.format(new Date(time), "h:mmA");
};
