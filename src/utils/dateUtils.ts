import moment from "jalali-moment";
moment.locale("fa-IR");

export type FormatType =
  | "dddd، jD jMMMM jYYYY"
  | "jD jMMMM jYYYY"
  | "jMM/jDD"
  | "jYYYY/jMM/jD";

export const convertMiladi2Jalali = (
  date?: string | undefined,
  format: FormatType = "jD jMMMM jYYYY"
) => {
  const newDate = moment(date);
  return newDate.format(format);
};

export const getDatesInRange = (
  startOffset: number,
  endOffset: number
): string[] => {
  const today = new Date();
  const dates: string[] = [];

  startOffset = -startOffset;

  for (let i = startOffset; i <= endOffset; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);
    dates.push(currentDate.toISOString()); // اطمینان از فرمت ISO
  }

  return dates;
};


// dates are in this format : "2025-01-30T15:52:38.749Z" (IsoString)
export const compareDates = (date1: string, date2: string) => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return (
    d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth() &&
    d1.getUTCDate() === d2.getUTCDate()
  );
};
