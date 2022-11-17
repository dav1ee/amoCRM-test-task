const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let countdownInterval;

  return (seconds) => {
    if (seconds > 86400) return alert(':)');

    // inputEl.disabled = true;     - пусть будет

    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
      let countdown = new Date(seconds * 1000).toISOString().substr(11, 8);

      if (seconds < 1) {
        // inputEl.disabled = false;

        timerEl.innerHTML = 'hh:mm:ss';

        clearInterval(countdownInterval);
      } else {
        seconds--;

        timerEl.innerHTML = countdown;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
