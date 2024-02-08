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

/* ---------------------------------- test ---------------------------------- */

const emboMenu = document.getElementById("embomenu");
const chev = document.getElementById("chevron");

const toggleMenus = () => {
  const emboMenuDropDown = document.getElementById("embo-dropdown");
  emboMenuDropDown.classList.toggle("toggle-menu");
  chev.classList.toggle("rotate");
};
emboMenu.addEventListener("click", toggleMenus);
