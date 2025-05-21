function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

function handlerClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;

}

buttonEl.addEventListener('click', handlerClick)
