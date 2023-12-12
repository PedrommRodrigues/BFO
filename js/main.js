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
