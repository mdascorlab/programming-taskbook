import CircleS from './CircleS.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        try {
            const r = parseFloat(input.value);
            outStr = CircleS(r).toString();
        }
        catch (err) {
            outStr = 'NaN';
        }
        output.textContent = outStr;
    }
});
