const randColors = function () {
  const colors = ["#FFFFFF", "#FF0000", "#00FF00", "#0000FF"];

  const randIndex = Math.floor(Math.random() * colors.length);
  const randColor = colors[randIndex];
  document.querySelector("body").style.backgroundColor = randColor;

  document.getElementById("colorName").textContent = randColor;
};
randColors();
document.querySelector("body").onclick = randColors;
