import { getProgramLaunchYear } from './date';

const getFlag = (param) => {
    if (param == 'true') { return true }
    if (param == 'false') { return false }
    return null;

}

export const getFiletrs = (query) => {
    const yearFilter = getProgramLaunchYear(query.year);
    let year = Number(query.year);
    if(!(year >= 2006 && year <= (new Date()).getFullYear())){
        year = null;
    }
    const filter = {
        year,
        yearFilter,
        lunch: null,
        landing: null,
    }
    if (getFlag(query.lunch) !== null) {
        filter.lunch = getFlag(query.lunch);
    }
    if (getFlag(query.landing) !== null) {
        filter.landing = getFlag(query.landing);
    }
    return filter;
}