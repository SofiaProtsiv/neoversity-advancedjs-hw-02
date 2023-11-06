import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  input: document.querySelector("#datetime-picker"),
  startBtn: document.querySelector('button[data-start]'),
  timeoutID: null,
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  dateFormat: "Y-m-d H:i:S",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future!',
        position: 'topCenter',
        color: 'red',
      });
      refs.startBtn.disabled = true;
    }
    if (selectedDates[0] >= options.defaultDate) {
      {
        refs.startBtn.disabled = false;
      }
    }
  },
}

const calendar = flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onClickStartBtn);

function onClickStartBtn() {
  refs.startBtn.disabled = true;
  refs.input.disabled = true;
  
  refs.timeoutID = setInterval(() => {
    updateTime();
  }, 1000);
  ;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTime() {
  const currentTime = new Date();
  const selectedTime = new Date(refs.input.value);

  const deltaTime = selectedTime - currentTime;

  if (deltaTime < 0) {
    clearInterval(refs.timeoutID);
    refs.input.disabled = false;
        refs.startBtn.disabled = true;
    return;
  } else {
    const { days, hours, minutes, seconds } = convertMs(deltaTime);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
  }
};