function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const clikBtn = document.querySelector(`.change-color`);
const textColor = document.querySelector(`.color`);
const bodyColor = document.querySelector(`body`);

clikBtn.addEventListener("click", handleClick);
function handleClick() {
  const newColor = getRandomHexColor();
  textColor.textContent = newColor ;
  bodyColor.style.backgroundColor = newColor ;
  
};

