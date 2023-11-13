const refs = {
    colorStart: document.querySelector('[data-start]'),
    colorStop: document.querySelector('[data-stop]'),
};
const body = document.querySelector('body');

refs.colorStart.addEventListener('click', handleClickStartBtn);
refs.colorStop.addEventListener('click', handleClickStopBtn);

refs.colorStop.setAttribute('disabled', true)

function handleClickStartBtn() {
    refs.colorStart.setAttribute('disabled', true);
    id = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.colorStop.removeAttribute('disabled');
}

function handleClickStopBtn() {
   clearInterval(id);
   refs.colorStop.setAttribute('disabled', true)
   refs.colorStart.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
}