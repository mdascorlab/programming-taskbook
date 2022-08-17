import TriangleP from './TriangleP.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    console.log(event.key);
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        try {
            const [a, h] = input.value
                .split(',')
                .map(num => Number(num));
            outStr = TriangleP(a, h).toString();
        }
        catch (err) {
            outStr = 'NaN';
        }
        output.textContent = outStr;
    }
});
