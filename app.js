// Selectors
const btn = document.querySelector(".btn");
const background = document.querySelector(".app");
const color = document.querySelector(".color");
const simple = document.querySelector(".simple");
const hex = document.querySelector(".hex");

const randomColor = ["#f17925", "#118dff", "#ff977e", "#ec5a96"];

// EventListeners
simple.addEventListener("click", () => {
  simple.classList.add("simple-active");
});
hex.addEventListener("click", () => {
  simple.classList.remove("simple-active");
});
btn.addEventListener("click", mode);

// Functions
function mode() {
  if (simple.classList.contains("simple-active")) {
    console.log("simple");
    changeSimpleBackground();
  } else {
    console.log("hex");
    changeHexBackground();
  }
}

function changeSimpleBackground() {
  const randomNumber = Math.floor(Math.random() * 4);
  color.textContent = randomColor[randomNumber];
  background.style.background = randomColor[randomNumber];
}

function changeHexBackground() {
  color.textContent = randomHex();
  background.style.background = randomHex();
}

function randomHex() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}
