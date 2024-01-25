function toggleMenu() {
  const menuButton = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");
  menuButton.classList.toggle("is-active");
  navMenu.classList.toggle("centered");
}

function expandHanddler() {
  const expandedText = document.querySelector("#expText");
  expandedText.classList.toggle("is-hidden");

  let spanText = document.querySelector(".hide-button");

  if (spanText.innerText == "Ver menos...") {
    spanText.innerText = "Ver mais...";
  } else {
    spanText.innerText = "Ver menos...";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("imageContainer");
  const numberOfImages = 52;

  for (let i = 1; i <= numberOfImages; i++) {
    const img = document.createElement("img");
    img.src = `Images/historial/${i}.png`;
    img.alt = "fotografia da banda";
    container.appendChild(img);
  }
});

const payAtHome = document.getElementById("payHome");
const payAtHeadquarters = document.getElementById("payHeadquarters");

payAtHome.addEventListener("change", function () {
  if (payAtHome.checked) {
    payAtHeadquarters.checked = false;
  }
});

payAtHeadquarters.addEventListener("change", function () {
  if (payAtHeadquarters.checked) {
    payAtHome.checked = false;
  }
});
