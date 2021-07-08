const concluirTarefa = (e) => {
  const botaoConclui = e.target;

  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle("done");
};

const BotaoConclui = () => {
  const botao = document.createElement("button");

  botao.classList.add("check-button");
  botao.innerText = "concluir";

  botao.addEventListener("click", concluirTarefa);

  return botao;
};

export default BotaoConclui;
