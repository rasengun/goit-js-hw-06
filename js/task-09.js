const btnChangeColor = document.querySelector(".change-color");
const spanEL = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnChangeColor.addEventListener("click", onClickBtnChangeColor);

function onClickBtnChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEL.textContent = document.body.style.backgroundColor;
}
