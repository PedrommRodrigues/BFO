function toggleMenu() {
  const menu = document.querySelector(".hamburger");
  menu.classList.toggle("is-active");
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
