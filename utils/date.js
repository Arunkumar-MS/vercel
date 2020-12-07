import { PROGRM_START_YEAR } from '../constents/Year';

export const getProgramLaunchYear = (year) => {
    const currentYear = (new Date()).getFullYear();
    const LunchYears = [];
    for (let index = PROGRM_START_YEAR; index <= currentYear; index++) {
        LunchYears.push({ year: index, isSelected: year == year});
    }
    return LunchYears;
}