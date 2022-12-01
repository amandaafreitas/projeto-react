import styles from "./CardFilmes.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const CardFilmes = ({
  titulo,
  ano,
  direcao,
  imagem,
  botao,
  idFilme,
  setFilmesPagina,
}) => {
  const [inputTitulo, setInputTitulo] = useState(titulo);
  const [inputAno, setInputAno] = useState(ano);
  const [inputDirecao, setInputDirecao] = useState(direcao);
  const [inputImagem, setInputImagem] = useState(imagem);

  const handleChangeTitulo = (e) => {
    setInputTitulo(e.target.value);
  };

  const handleChangeAno = (e) => {
    setInputAno(e.target.value);
  };

  const handleChangeDirecao = (e) => {
    setInputDirecao(e.target.value);
  };

  const handleChangeImagem = (e) => {
    setInputImagem(e.target.value);
  };

  // Para recarregar os cards que estão na tela depois do cadastro e exclusão

  const atualizaFilmes = () => {
    axios
      .get("https://estao-servidos.onrender.com/filmes")
      .then((response) => {
        setFilmesPagina(response.data);
      })
      .catch((erro) => {
        console.log("Deu tudo errado: ", erro);
      });
  };

  // Métodos http
  // Cadastrar filmes

  const cadastrar = (e) => {
    e.preventDefault();
    const filmeNovo = {
      titulo: e.target.titulo.value,
      ano: e.target.ano.value,
      direcao: e.target.direcao.value,
      imagem: e.target.imagem.value,
    };

    axios
      .post("https://estao-servidos.onrender.com/filmes", filmeNovo)
      .then((resposta) => {
        atualizaFilmes();
        alert("Filme cadastrado com sucesso");
      })
      .catch((erro) => console.log(erro));
  };

  // Excluir filme

  const excluirFilme = (id) => {
    axios
      .delete(`https://estao-servidos.onrender.com/filmes/${id}`)
      .then(() => {
        atualizaFilmes();
        alert("Filme excluido com sucesso");
      })
      .catch((erro) => console.error(erro));
  };

  //Editar filme

  const editarFilme = (id) => {
    const filmeEditado = {
      titulo: inputTitulo,
      ano: inputAno,
      direcao: inputDirecao,
      imagem: inputImagem,
    };
    axios
      .put(`https://estao-servidos.onrender.com/filmes/${id}`, filmeEditado)
      .then(() => {
        atualizaFilmes();
        alert("Filme atualizado com sucesso");
      })
      .catch((erro) => console.error(erro));
  };

  return (
    <>
      <div className={styles.formularioContainer}>
        <form className={styles.formulario} onSubmit={cadastrar}>
          <label className={styles.nomeInput} htmlFor="titulo">
            Título
          </label>
          <input
            className={styles.input}
            type="text"
            id="titulo"
            onChange={handleChangeTitulo}
            defaultValue={titulo}
          />
          <label className={styles.nomeInput} htmlFor="ano">
            Ano
          </label>
          <input
            className={styles.input}
            type="text"
            id="ano"
            onChange={handleChangeAno}
            defaultValue={ano}
          />
          <label className={styles.nomeInput} htmlFor="diretor">
            Direção
          </label>
          <input
            className={styles.input}
            type="text"
            id="direcao"
            onChange={handleChangeDirecao}
            defaultValue={direcao}
          />
          <label className={styles.nomeInput} htmlFor="imagem">
            Imagem
          </label>
          <input
            className={styles.input}
            type="text"
            id="imagem"
            onChange={handleChangeImagem}
            defaultValue={imagem}
          />

          {botao === "Cadastrar" && (
            <button type="submit" className={styles.botao}>
              {botao}
            </button>
          )}

          {botao !== "Cadastrar" && (
            <div className={styles.botoes}>
              <button
                onClick={() => editarFilme(idFilme)}
                style={{ backgroundColor: "orange" }}
                type="button"
                className={styles.botao}
              >
                {botao}
              </button>
              <button
                onClick={() => excluirFilme(idFilme)}
                style={{ backgroundColor: "red" }}
                type="button"
                className={styles.botao}
              >
                Excluir
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default CardFilmes;
