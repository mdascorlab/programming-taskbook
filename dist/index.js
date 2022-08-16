import RootCount from './RootCount.js';
const input = document.querySelector('#main-input');
const output = document.querySelector('#main-output');
input.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        event.preventDefault();
        let outStr;
        const [a, b, c] = input.value.split(',').map(a => Number(a));
        try {
            outStr = RootCount(a, b, c).toString();
        }
        catch (err) {
            outStr = 'Wrong input';
        }
        output.textContent = outStr;
    }
});
