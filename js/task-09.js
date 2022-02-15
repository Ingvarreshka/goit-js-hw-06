function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyBackgroundColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const textBackgroundColor = document.querySelector(".color");

btnChangeColor.addEventListener('click', () => {
  bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  textBackgroundColor.textContent = bodyBackgroundColor.style.backgroundColor;
});