const ofertaEducativa = [
  {
    isntrument: "Flauta Transversal",
    name: "Professora Ana Covas",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Oboé",
    name: "Professora Rita Félix",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Clarinete",
    name: "Professor Manuel Pinho",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Fagote",
    name: "Professora Maria Ferreira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Saxofone",
    name: "Professor André Fonseca, Maria Silva e Lucas Oliveira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Trompete",
    name: "Professora Elba Rodrigues",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Trompa",
    name: "Professor Renato Oliveira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Eufónio",
    name: "Professor Rui Sousa",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Trombone",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Tuba",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Percussão",
    name: "Professora Margarida",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Guitarra",
    name: "Professor Mário",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Violino",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
  {
    isntrument: "Piano",
    name: "Professora Irene Silva e Francisca Pereira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
  },
];

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

const cardSection = document.getElementById("cardSection");
