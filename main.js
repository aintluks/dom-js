import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

const novaTarefa = document.querySelector("[data-form-button]");

const criarTarefa = (e) => {
  e.preventDefault();

  const inputValue = document.querySelector("[data-form-input]").value;

  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${inputValue}</p>`;

  tarefa.classList.add("task");

  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  document.querySelector("[data-list]").appendChild(tarefa);
};

novaTarefa.addEventListener("click", criarTarefa);
