const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const handleInput = event => {
    const userName = event.target.value.trim();

    userName === '' ? outputEl.textContent = 'Anonymous' : outputEl.textContent = userName;
}

inputEl.addEventListener('input', handleInput);
