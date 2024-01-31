const ofertaEducativa = [
  {
    isntrument: "Flauta Transversal",
    name: "Professora Ana Covas",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Oboé",
    name: "Professora Rita Félix",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Clarinete",
    name: "Professor Manuel Pinho",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Fagote",
    name: "Professora Maria Ferreira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Saxofone",
    name: "Professor André Fonseca, Maria Silva e Lucas Oliveira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Trompete",
    name: "Professora Elba Rodrigues",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Trompa",
    name: "Professor Renato Oliveira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Eufónio",
    name: "Professor Rui Sousa",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Trombone",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Tuba",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Percussão",
    name: "Professora Margarida",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Guitarra",
    name: "Professor Mário",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Violino",
    name: "",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  },
  {
    isntrument: "Piano",
    name: "Professora Irene Silva e Francisca Pereira",
    description:
      "Apresente sua equipe! Clique aqui para adicionar imagens, texto e links ou conecte dados da sua coleção."
  }
];

// Get the container element by its ID
const DivAlvo = document.getElementById("cardSection");
const testeH1 = document.createElement("h1");

testeH1.textContent = "crl";

// Create the card div with specified classes and styles
var cardDiv = document.createElement("div");
cardDiv.className = "card mb-3";
cardDiv.style.maxWidth = "540px";

// Set inner HTML with the entire card structure
cardDiv.innerHTML = `
    <div class="row g-0 gray">
        <div class="col-md-4">
            <img src="Images/instrumentos/transversal.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Flauta transversal</h5>
                <p class="orange">Professora Ana Covas</p>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
`;

// Append the created card to the container
DivAlvo.appendChild(cardDiv);
