import"./assets/common-3cd90513.js";import{i as l}from"./assets/vendor-651d7991.js";const u=document.querySelector(".form");u.addEventListener("submit",a);function a(e){e.preventDefault();const{delay:t,step:r,amount:s}=e.currentTarget.elements;if(t.value<0||r.value<0||s.value<0){l.show({title:"Warning",message:"❗ Please enter a positive number",position:"topCenter",color:"yellow"});return}for(let o=0;o<=s.value;o++){const m=Number(t.value)+r.value*o;c(o,m).then(({position:n,delay:i})=>{l.show({title:"Success",message:`✅ Fulfilled promise ${n+1} in ${i}ms`,position:"topCenter",color:"green"})}).catch(({position:n,delay:i})=>{l.show({title:"Error",message:`❌ Rejected promise ${n+1} in ${i}ms`,position:"topCenter",color:"red"})})}e.currentTarget.reset()}function c(e,t){return new Promise((r,s)=>{const o=Math.random()>.3;setTimeout(()=>{o?r({position:e,delay:t}):s({position:e,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map
