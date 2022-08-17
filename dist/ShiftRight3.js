export default function ShiftRight3(list) {
    if (!Array.isArray(list) || list.length !== 3)
        throw Error('Wrong parameter');
    return [list[2], list[0], list[1]];
}
