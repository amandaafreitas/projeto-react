const TelaEdicao = () => {
  return (
    <>
      <h1>Cadastrar filme</h1>
      <form>
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" />
        <label htmlFor="diretor">Diretor(a)</label>
        <input type="text" id="diretor" />
        <label htmlFor="duracao">Duração</label>
        <input type="text" id="diretor" />
        <label htmlFor="classificacao">Classificaçao</label>
        <input type="text" id="classificacao" />
        <label htmlFor="distribuidora">Distribuidora</label>
        <input type="text" id="distribuidora" />
        <label htmlFor="genero">Gênero</label>
        <input type="text" id="genero" />
      </form>
    </>
  );
};
export default TelaEdicao;
