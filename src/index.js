import "./styles/index.scss";
import profileImage from "./images/profile.png";
import racoonSvg from "./images/racoon.svg";

const elvelShieldRecipe = {
  leatherStrips: 2,
  ironIngots: 1,
  refinedMoonstone: 4,
};

const elvenGauntletRecipe = {
  ...elvelShieldRecipe,
  leather: 1,
  refinedMoonstone: 5,
};

// Testing png rendering
function renderImageOne() {
  const image = new Image();
  image.src = profileImage;

  const element = document.createElement("div");

  element.appendChild(image);

  return element;
}

// Testing svg rendering
function renderImageTwo() {
  const image = new Image();
  image.src = racoonSvg;

  const element = document.createElement("div");

  element.appendChild(image);

  return element;
}

document.body.append(renderImageOne());
document.body.append(renderImageTwo());

console.log(elvelShieldRecipe);
console.log(elvenGauntletRecipe);
