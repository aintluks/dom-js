const deletarTarefa = (e) => {
  const botaoDeleta = e.target;

  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.remove();

  return botaoDeleta;
};

const BotaoDeleta = () => {
  const botao = document.createElement("button");
  botao.innerText = "deletar";

  botao.addEventListener("click", deletarTarefa);

  return botao;
};

export default BotaoDeleta;
