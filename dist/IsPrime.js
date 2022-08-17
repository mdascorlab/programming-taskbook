export default function IsPrime(n) {
    if (typeof n !== 'number'
        || n < 0
        || n !== Number(n.toFixed(0)))
        throw Error('Wrong argument');
    if (n <= 1)
        return false;
    if (n <= 3)
        return true;
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    for (let i = 5; i * i <= n; i = i + 6)
        if (n % i === 0 || n % (i + 2) === 0)
            return false;
    return true;
}
