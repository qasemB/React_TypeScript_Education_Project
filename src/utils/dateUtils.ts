import moment from "jalali-moment";
moment.locale("fa-IR")

export type FormatType = 'dddd، jD jMMMM jYYYY' | 'jD jMMMM jYYYY' | 'jMM/jDD' | 'jYYYY/jMM/jD'

export const convertMiladi2Jalali =(date?: string | undefined,  format: FormatType = 'jD jMMMM jYYYY')=>{
    const newDate = moment(date)
    return newDate.format(format)
}


export const getDatesInRange = (startOffset: number, endOffset: number): string[] => {
    const today = new Date();
    const dates: string[] = [];

    startOffset = -startOffset

    for (let i = startOffset; i <= endOffset; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);
        dates.push(currentDate.toISOString()); // اطمینان از فرمت ISO
    }

    return dates;
};