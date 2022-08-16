import sign from './sign.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        try {
            outStr = sign(parseFloat(input.value)).toString();
        }
        catch (err) {
            outStr = 'NaN';
        }
        output.textContent = outStr;
    }
});
