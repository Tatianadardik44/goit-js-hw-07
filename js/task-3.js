const inpufEl = document.querySelector("#name-input");
const textWelcome = document.querySelector("#name-output");





// inpufEl.addEventListener(`input`, function () {
//   const names = inpufEl.value;
//   if (names.trim() ===  ``) {
//     textWelcome.textContent = `Anonymous`;
//   } else { textWelcome.textContent = names; }
    
// });



inpufEl.addEventListener(`input`, inputWelcome);
function inputWelcome(event) {
  const name = event.target.value;
  const names = name.trim();
  if (names === ``) {
    textWelcome.textContent = `Anonymous`;
  } else {
    textWelcome.textContent = names;
  }
  
}

// Я вибачаюсь , но это взрыв мозгов !