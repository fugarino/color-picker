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
  hex.classList.remove("hex-active");
});
hex.addEventListener("click", () => {
  simple.classList.remove("simple-active");
  hex.classList.add("hex-active");
});
btn.addEventListener("click", mode);

// Functions
function mode() {
  if (simple.classList.contains("simple-active")) {
    changeSimpleBackground();
  } else {
    changeHexBackground();
  }
}

function changeSimpleBackground() {
  const randomNumber = Math.floor(Math.random() * 4);
  color.textContent = randomColor[randomNumber];
  background.style.background = randomColor[randomNumber];
  btn.style.background = randomColor[randomNumber];
}

function changeHexBackground() {
  let hex = randomHex();
  color.textContent = hex;
  background.style.background = hex;
  btn.style.background = hex;
  console.log(hex);
}

function randomHex() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}
