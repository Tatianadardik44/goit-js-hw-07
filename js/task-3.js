const inputEl = document.querySelector("#name-input");
const textWelcome = document.querySelector("#name-output");





// inpufEl.addEventListener(`input`, function () {
//   const names = inputEl.value;
//   if (names.trim() ===  ``) {
//     textWelcome.textContent = `Anonymous`;
//   } else { textWelcome.textContent = names; }
    
// });



inputEl.addEventListener(`input`, inputWelcome);
function inputWelcome(event) {
  const name = event.target.value;
  const names = name.trim();
  if (names === ``) {
    textWelcome.textContent = `Anonymous`;
  } else {
    textWelcome.textContent = names;
  }
  
}

