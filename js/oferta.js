const ofertaEducativa = [
  {
    isntrument: "Flauta Transversal",
    name: "Professora Ana Covas",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "transversal",
  },
  {
    isntrument: "Oboé",
    name: "Professora Rita Félix",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "oboe",
  },
  {
    isntrument: "Clarinete",
    name: "Professor Manuel Pinho",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "clarinete",
  },
  {
    isntrument: "Fagote",
    name: "Professora Maria Ferreira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "fagote",
  },
  {
    isntrument: "Saxofone",
    name: "Professor André Fonseca, Maria Silva e Lucas Oliveira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "saxofoneteste",
  },
  {
    isntrument: "Trompete",
    name: "Professora Elba Rodrigues",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "trompete",
  },
  {
    isntrument: "Trompa",
    name: "Professor Renato Oliveira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "trompa",
  },
  {
    isntrument: "Eufónio",
    name: "Professor Rui Sousa",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "eufonio",
  },
  {
    isntrument: "Trombone",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "trombone",
  },
  {
    isntrument: "Tuba",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "tuba",
  },
  {
    isntrument: "Percussão",
    name: "Professora Margarida",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "percussao",
  },
  {
    isntrument: "Guitarra",
    name: "Professor Mário",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "guitarra",
  },
  {
    isntrument: "Violino",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "violino",
  },
  {
    isntrument: "Piano",
    name: "Professora Irene Silva e Francisca Pereira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção.",
    image: "piano",
  },
];

const DivAlvo = document.getElementById("cardSection");

const loopOver = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card mb-3";
    cardDiv.style.maxWidth = "540px";

    cardDiv.innerHTML = `
    <div class="row g-0 gray">
        <div class="col-md-4">
          <div class="card-img">
            <img src="Images/instrumentos/${arr[i].image}.jpg" class="img-fluid rounded-start" alt="...">
          </div>
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${arr[i].isntrument}</h5>
                <p class="orange ">${arr[i].name}</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
`;
    DivAlvo.appendChild(cardDiv);
  }
};

loopOver(ofertaEducativa);
