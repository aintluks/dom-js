import { ordenaDatas, removeDatasRepetidas } from "../service/data.js";
import { criaData } from "./criaData.js";

export const carregaTarefa = () => {
  const lista = document.querySelector("[data-list]");
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  const datasUnicas = removeDatasRepetidas(tarefas);
  ordenaDatas(datasUnicas);

  lista.innerHTML = "";

  datasUnicas.forEach((dia) => {
    lista.appendChild(criaData(dia));
  });
};
