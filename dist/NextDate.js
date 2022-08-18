function IsLeapYear(year) {
    if (typeof year !== 'number'
        || year !== Number(year.toFixed(0))
        || year < 0)
        throw new Error('Year is not a positive integer');
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
function MonthDays(month, year) {
    if (typeof year !== 'number'
        || year !== Number(year.toFixed(0))
        || typeof month !== 'number'
        || month !== Number(month.toFixed(0))
        || month <= 0 || year < 0)
        throw new Error('Year or month is not an integer');
    return [
        31, IsLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ][month - 1];
}
export default function NextDate(day, month, year) {
    if (typeof year !== 'number'
        || year !== Number(year.toFixed(0))
        || typeof month !== 'number'
        || month !== Number(month.toFixed(0))
        || typeof day !== 'number'
        || day !== Number(day.toFixed(0))
        || day * month * year <= 0)
        throw new Error('Wrong parameters');
    return MonthDays(month, year) === day
        ? [1, month === 12 ? 1 : month + 1, month === 12 ? year + 1 : year]
        : [day + 1, month, year];
}
export { IsLeapYear, MonthDays };
