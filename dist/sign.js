export default function sign(num) {
    if (Number.isNaN(num) || typeof num !== 'number')
        throw Error('Num is not a number');
    if (num < 0)
        return -1;
    else if (num > 0)
        return 1;
    return 0;
}
