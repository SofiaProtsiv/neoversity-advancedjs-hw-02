import"./assets/common-3cd90513.js";import{f as m,i as f}from"./assets/vendor-651d7991.js";const t={input:document.querySelector("#datetime-picker"),startBtn:document.querySelector("button[data-start]"),timeoutID:null,days:document.querySelector("span[data-days]"),hours:document.querySelector("span[data-hours]"),minutes:document.querySelector("span[data-minutes]"),seconds:document.querySelector("span[data-seconds]")},r={enableTime:!0,dateFormat:"Y-m-d H:i:S",time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=r.defaultDate&&(f.show({title:"Error",message:"Please choose a date in the future!",position:"topCenter",color:"red"}),t.startBtn.disabled=!0),e[0]>=r.defaultDate&&(t.startBtn.disabled=!1)}};m(t.input,r);t.startBtn.addEventListener("click",h);function h(){t.startBtn.disabled=!0,t.input.disabled=!0,t.timeoutID=setInterval(()=>{y()},1e3)}function n(e){return String(e).padStart(2,"0")}function p(e){const a=n(Math.floor(e/864e5)),s=n(Math.floor(e%864e5/36e5)),c=n(Math.floor(e%864e5%36e5/6e4)),l=n(Math.floor(e%864e5%36e5%6e4/1e3));return{days:a,hours:s,minutes:c,seconds:l}}function y(){const e=new Date,o=new Date(t.input.value)-e;if(o<0){clearInterval(t.timeoutID),t.input.disabled=!1,t.startBtn.disabled=!0;return}else{const{days:u,hours:d,minutes:a,seconds:s}=p(o);t.days.textContent=u,t.hours.textContent=d,t.minutes.textContent=a,t.seconds.textContent=s}}
//# sourceMappingURL=commonHelpers2.js.map