import Quarter from './Quarter.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        try {
            const [x, y] = input.value
                .split(',')
                .map(num => Number(num));
            outStr = `${Quarter(x, y)} Quarter`;
        }
        catch (err) {
            outStr = 'NaN';
        }
        output.textContent = outStr;
    }
});
