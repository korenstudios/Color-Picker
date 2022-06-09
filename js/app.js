const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const red2 = document.getElementById("red2");
const green2 = document.getElementById("green2");
const blue2 = document.getElementById("blue2");
const rgbRes = document.querySelector(".rgb-res");
const rgbRes2 = document.querySelector(".rgb-res2");
const rgb_hex = document.getElementById("rgb-hex");
const rgb_hex2 = document.getElementById("rgb-hex2");
const selectEvent = document.getElementById("events");
const btn = document.getElementById("btn");

function changeRgbColor() {
  if (red.value == "" || green.value == "" || blue.value == "") {
    rgbRes.style.backgroundColor = "";
  } else {
    const r = Number(red.value);
    const g = Number(green.value);
    const b = Number(blue.value);
    rgbRes.style.backgroundColor = `rgb(${r},${g},${b})`;
  }
  if (red2.value == "" || green2.value == "" || blue2.value == "") {
    rgbRes2.style.backgroundColor = "";
  } else {
    const r1 = Number(red2.value);
    const g2 = Number(green2.value);
    const b2 = Number(blue2.value);
    rgbRes2.style.backgroundColor = `rgb(${r1},${g2},${b2})`;
  }
}

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

function askForHex() {
  if (red.value == "" || green.value == "" || blue.value == "") {
    rgb_hex.value = "";
  } else {
    const r = rgbToHex(red.value);
    const g = rgbToHex(green.value);
    const b = rgbToHex(blue.value);
    rgb_hex.value = "#" + r + g + b;
  }
}

function askForHex2() {
  if (red2.value == "" || green2.value == "" || blue2.value == "") {
    rgb_hex2.value = "";
  } else {
    const r2 = rgbToHex(red2.value);
    const g2 = rgbToHex(green2.value);
    const b2 = rgbToHex(blue2.value);
    rgb_hex2.value = "#" + r2 + g2 + b2;
  }
}

document.getElementById("rgb-hex-btn").addEventListener("click", askForHex);
document.getElementById("rgb-hex-btn2").addEventListener("click", askForHex2);

function clearFields(e) {
  red.value = "";
  green.value = "";
  blue.value = "";
  red2.value = "";
  green2.value = "";
  blue2.value = "";
  rgb_hex.value = "";
  rgb_hex2.value = "";
  rgbRes.style.backgroundColor = "";
  rgbRes2.style.backgroundColor = "";
  btn.style.display = "none";

  if (e.target.value === "click") {
    btn.style.display = "block";
  }
}

selectEvent.addEventListener("change", (e) => {
  const theEvent = e.target.value;
  switch (theEvent) {
    case "input":
      clearFields(e);
      rgbRes2.removeEventListener("mouseover", changeRgbColor);
      rgbRes.removeEventListener("mouseover", changeRgbColor);
      btn.removeEventListener("click", changeRgbColor);
      rgbRes.removeEventListener("dblclick", changeRgbColor);
      rgbRes2.removeEventListener("dblclick", changeRgbColor);
      red.addEventListener("input", changeRgbColor);
      green.addEventListener("input", changeRgbColor);
      blue.addEventListener("input", changeRgbColor);
      red2.addEventListener("input", changeRgbColor);
      green2.addEventListener("input", changeRgbColor);
      blue2.addEventListener("input", changeRgbColor);
      break;
    case "mouseover":
      clearFields(e);
      red.removeEventListener("input", changeRgbColor);
      green.removeEventListener("input", changeRgbColor);
      blue.removeEventListener("input", changeRgbColor);
      red2.removeEventListener("input", changeRgbColor);
      green2.removeEventListener("input", changeRgbColor);
      blue2.removeEventListener("input", changeRgbColor);
      rgbRes.removeEventListener("dblclick", changeRgbColor);
      rgbRes2.removeEventListener("dblclick", changeRgbColor);
      btn.removeEventListener("click", changeRgbColor);
      rgbRes2.addEventListener("mouseover", changeRgbColor);
      rgbRes.addEventListener("mouseover", changeRgbColor);
      break;
    case "click":
      clearFields(e);
      rgbRes2.removeEventListener("mouseover", changeRgbColor);
      rgbRes.removeEventListener("mouseover", changeRgbColor);
      red.removeEventListener("input", changeRgbColor);
      green.removeEventListener("input", changeRgbColor);
      blue.removeEventListener("input", changeRgbColor);
      red2.removeEventListener("input", changeRgbColor);
      green2.removeEventListener("input", changeRgbColor);
      blue2.removeEventListener("input", changeRgbColor);
      rgbRes.removeEventListener("dblclick", changeRgbColor);
      rgbRes2.removeEventListener("dblclick", changeRgbColor);
      btn.addEventListener("click", changeRgbColor);
      break;
    case "dblclick":
      clearFields(e);
      rgbRes2.removeEventListener("mouseover", changeRgbColor);
      rgbRes.removeEventListener("mouseover", changeRgbColor);
      red.removeEventListener("input", changeRgbColor);
      green.removeEventListener("input", changeRgbColor);
      blue.removeEventListener("input", changeRgbColor);
      red2.removeEventListener("input", changeRgbColor);
      green2.removeEventListener("input", changeRgbColor);
      blue2.removeEventListener("input", changeRgbColor);
      btn.removeEventListener("click", changeRgbColor);
      rgbRes.addEventListener("dblclick", changeRgbColor);
      rgbRes2.addEventListener("dblclick", changeRgbColor);
  }
});
