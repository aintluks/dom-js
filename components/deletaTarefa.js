const deletarTarefa = (atualiza, id) => {
  const tarefas = JSON.parse(localStorage.getItem("tarefas"));

  tarefas.splice(id, 1);

  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  atualiza();
};

const BotaoDeleta = (atualiza, id) => {
  const botao = document.createElement("button");
  botao.innerText = "deletar";

  botao.addEventListener("click", () => deletarTarefa(atualiza, id));

  return botao;
};

export default BotaoDeleta;
