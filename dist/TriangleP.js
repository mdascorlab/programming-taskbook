export default function TriangleP(a, h) {
    if (typeof a !== 'number'
        || typeof h !== 'number'
        || a < 0
        || h < 0)
        throw Error('Some arguments are wrong');
    if (h === 0 || a === 0)
        return 0;
    const b = ((a / 2) ** 2 + h ** 2) ** .5;
    return b * 3;
}
