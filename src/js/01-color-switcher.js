"use strict";

const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
    timeoutID: null,
    isActive: true
}
  refs.startBtn.addEventListener("click", onClickStart);
  refs.stopBtn.addEventListener("click", onClickStop);

  function onClickStart () {
    if(refs.isActive){
      refs.startBtn.setAttribute('disabled', true);
    }
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.timeoutID = setTimeout(() => {
        onClickStart();
      }, 1000);
  };

  function onClickStop () {
    if(refs.isActive){
      refs.startBtn.removeAttribute('disabled', false);
    }
    clearTimeout(refs.timeoutID);
  };

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };