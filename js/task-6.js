function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const fieldInput = document.querySelector(`input`);
const addBtr = document.querySelector(`[data-create]`);
const clinerBtr = document.querySelector(`[data-destroy]`);
const bigBox = document.querySelector(`#boxes`);
 let width = 30;
let height = 30;


addBtr.addEventListener("click", createBoxes);
function createBoxes() {
  const amount = fieldInput.value;
  if (amount <= 0 || amount > 100) {
    bigBox.innerHTML = "";
     width = 30;
     height = 30;
    return;
  }
  else {
    for (let i = 0; i < amount; i++)
    {
       const cub = document.createElement("div");
        cub.style.width = `${width}px`;
        cub.style.height = `${height}px`;
        cub.style.backgroundColor = getRandomHexColor();
        bigBox.prepend(cub);
        width += 10;
        height += 10;
      fieldInput.value = "";
      
    };
  };
  
};
 clinerBtr.addEventListener("click",destroyBoxes);
    function destroyBoxes() {
      bigBox.innerHTML = ""; 
     width = 30;
     height = 30;
};








































     



