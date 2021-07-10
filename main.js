import { handleNovoItem } from "./components/criaTarefa.js";
import { carregaTarefa } from "./components/carrefaTarefa.js";

const novaTarefa = document.querySelector("[data-form-button]");

novaTarefa.addEventListener("click", handleNovoItem);

carregaTarefa();
