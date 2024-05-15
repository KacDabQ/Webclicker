let clicks = document.querySelector("#clickCounter");
let counter = 0;

function onClick() {
  clicks.textContent = ++counter;
}

document.querySelector("button").addEventListener("mousedown", onClick);
