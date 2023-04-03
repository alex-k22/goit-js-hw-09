
const startButtonEl = document.querySelector('[data-start]');
const stopButtonEl = document.querySelector('[data-stop]');
let timerId;

const handleOnStartClick = () =>{
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    startButtonEl.disabled = true;
}

const handlerOnStopClick = () => {
    startButtonEl.disabled = false;
    clearInterval(timerId);
}

startButtonEl.addEventListener('click', handleOnStartClick);

stopButtonEl.addEventListener('click', handlerOnStopClick);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }