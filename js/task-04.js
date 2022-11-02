const incrementEl = document.querySelector("[data-action='decrement']");
const decrementEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

incrementEl.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

decrementEl.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
