import { carregaTarefa } from "./carrefaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

export const Tarefa = ({ horario, inputValue, concluida }, id) => {
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${horario} ${inputValue}</p>`;

  if (concluida) {
    tarefa.classList.add("task");
    tarefa.classList.add("done");
  } else {
    tarefa.classList.add("task");
  }

  tarefa.innerHTML = conteudo;
  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(BotaoDeleta(carregaTarefa, id));

  return tarefa;
};

export const handleNovoItem = (e) => {
  e.preventDefault();
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  const concluida = false;

  const input = document.querySelector("[data-form-input]");
  const inputValue = document.querySelector("[data-form-input]").value;

  const calendario = document.querySelector("[data-form-date]");
  const dataFormatada = moment(calendario.value).format("DD/MM/YYYY");
  const horario = moment(calendario.value).format("HH:mm");

  const tarefaDados = { dataFormatada, inputValue, concluida, horario };

  tarefas.push(tarefaDados);

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  input.value = " ";

  carregaTarefa();
};
