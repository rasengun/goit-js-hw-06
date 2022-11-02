const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

const onInputChange = (event) =>
  event.currentTarget.value.trim() !== ""
    ? (refs.span.textContent = event.currentTarget.value)
    : (refs.span.textContent = "Anonymous");

refs.input.addEventListener("input", onInputChange);
