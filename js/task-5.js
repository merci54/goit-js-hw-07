function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function handlerClick(event) {
  body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor()

}

buttonEl.addEventListener('click', handlerClick)
