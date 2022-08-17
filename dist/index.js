import ShiftRight3 from './ShiftRight3.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        try {
            const list = input.value
                .split(',')
                .map(num => Number(num));
            const res = ShiftRight3(list);
            outStr = `[${res[0]}, ${res[1]}, ${res[2]}]`;
        }
        catch (err) {
            outStr = 'Error';
        }
        output.textContent = outStr;
    }
});
