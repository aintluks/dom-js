const concluirTarefa = (atualiza, id) => {
  const tarefas = JSON.parse(localStorage.getItem("tarefas"));

  tarefas[id].concluida = !tarefas[id].concluida;

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  atualiza();
};

const BotaoConclui = (atualiza, id) => {
  const botao = document.createElement("button");

  botao.classList.add("check-button");
  botao.innerText = "concluir";

  botao.addEventListener("click", () => concluirTarefa(atualiza, id));

  return botao;
};

export default BotaoConclui;
