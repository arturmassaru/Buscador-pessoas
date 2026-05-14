const pessoas = [
  { nome: "Ana Silva", idade: 23 },
  { nome: "Bruno Souza", idade: 31 },
  { nome: "Carla Santos", idade: 27 },
  { nome: "Daniel Oliveira", idade: 35 },
  { nome: "Eduarda Lima", idade: 22 },
  { nome: "Felipe Costa", idade: 29 },
  { nome: "Gabriela Alves", idade: 26 },
  { nome: "Henrique Pereira", idade: 33 },
  { nome: "Isabela Rodrigues", idade: 24 },
  { nome: "João Martins", idade: 30 },
  { nome: "Karina Gomes", idade: 28 },
  { nome: "Lucas Ribeiro", idade: 21 },
  { nome: "Mariana Fernandes", idade: 32 },
  { nome: "Nicolas Carvalho", idade: 25 },
  { nome: "Olívia Rocha", idade: 34 },
  { nome: "Paulo Dias", idade: 36 },
  { nome: "Quésia Barros", idade: 23 },
  { nome: "Rafael Teixeira", idade: 27 },
  { nome: "Sabrina Moreira", idade: 29 },
  { nome: "Thiago Freitas", idade: 31 },
  { nome: "Ursula Nunes", idade: 26 },
  { nome: "Victor Batista", idade: 28 },
  { nome: "Wesley Moura", idade: 33 },
  { nome: "Xênia Farias", idade: 24 },
  { nome: "Yasmin Duarte", idade: 22 },
  { nome: "Zeca Pacheco", idade: 35 },
  { nome: "Aline Castro", idade: 27 },
  { nome: "Bernardo Melo", idade: 30 },
  { nome: "Camila Peixoto", idade: 25 },
  { nome: "Diego Araújo", idade: 34 },
  { nome: "Elaine Viana", idade: 28 },
  { nome: "Fernando Braga", idade: 37 },
  { nome: "Giovana Tavares", idade: 23 },
  { nome: "Hugo Cardoso", idade: 32 },
  { nome: "Ingrid Rezende", idade: 26 },
  { nome: "Juliano Borges", idade: 31 },
  { nome: "Kelly Monteiro", idade: 29 },
  { nome: "Leonardo Cunha", idade: 33 },
  { nome: "Mônica Queiroz", idade: 36 },
  { nome: "Natália Coelho", idade: 24 },
  { nome: "Otávio Andrade", idade: 35 },
  { nome: "Patrícia Neves", idade: 27 },
  { nome: "Renan Macedo", idade: 30 },
  { nome: "Simone Guedes", idade: 28 },
  { nome: "Túlio Correia", idade: 34 },
  { nome: "Vanessa Rangel", idade: 25 },
  { nome: "Willian Lacerda", idade: 31 },
  { nome: "Xavier Torres", idade: 38 },
  { nome: "Yuri Albuquerque", idade: 22 },
  { nome: "Zilda Fonseca", idade: 40 },
  { nome: "Josefa", idade: 68 },
];

const searchNomeInput = document.getElementById("search-nome");
const searchIdadeInput = document.getElementById("search-idade");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results");
const addButton = document.getElementById("add-button");


searchButton.addEventListener("click", function () {
  const termoBuscaNome = searchNomeInput.value.toLowerCase();
  const termoBuscaIdade = searchIdadeInput.value.toLowerCase();
  if (!termoBuscaNome && !termoBuscaIdade ) {
    alert("Por favor, insira um nome ou idade.");
    return;
  }

  // Filtra pessoas, caso elas estejam dentro da lista de pessoas, e normaliza os nomes para evitar problemas com acentos e diferenças de caixa (maiúsculas/minúsculas) (acentos) e caps lock
 const resultados = pessoas.filter((pessoa) => {
  return (
    pessoa.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .includes(termoBuscaNome) &&
    (termoBuscaIdade ? pessoa.idade == termoBuscaIdade : true)
  );
});


  // Limpa os resultados anteriores
  resultsContainer.innerHTML = "";

  // Exibe os resultados
  if (resultados.length > 0) {
    resultados.forEach((pessoa) => {
      const li = document.createElement("li");
      li.textContent = `${pessoa.nome} - ${pessoa.idade} anos`;
      resultsContainer.appendChild(li);
    });
  } else {
    resultsContainer.innerHTML = "<li>Nenhuma pessoa encontrada.</li>";
  }
});

addButton.addEventListener("click", function () {
  const addNomePessoa = searchNomeInput.value.toLowerCase()
  const addIdadePessoa = searchIdadeInput.value
  if (!addNomePessoa || !addIdadePessoa){
    alert("Digite um nome ou idade");
    return;
  }

  pessoas.push({nome:addNomePessoa, idade:addIdadePessoa,}); 



} )
