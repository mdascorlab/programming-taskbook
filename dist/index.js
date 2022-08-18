import NextDate from './NextDate.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        try {
            let [d, m, y] = input.value
                .split('/')
                .map(num => Number(num));
            const [nextD, nextM, nextY] = NextDate(d, m, y);
            outStr = `Next date: ${nextD}/${nextM}/${nextY}`;
        }
        catch (err) {
            outStr = 'Wrong input';
        }
        output.textContent = outStr;
    }
});
