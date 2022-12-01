import styles from "./CardFilmes.module.css";
import { forwardRef, useEffect, useState } from "react";
import axios from "axios";

const CardFilmes = forwardRef(
  (
    {
      titulo,
      ano,
      direcao,
      imagem,
      botao,
      idFilme,
      setFilmesPagina,
      ...restoDasProps
    },
    ref
  ) => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
      setInput(e.target.value);
    };

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
        .then((resposta) => atualizaFilmes())
        .catch((erro) => console.log(erro));
    };

    const excluirFilme = (id) => {
      axios
        .delete(`https://estao-servidos.onrender.com/filmes/${id}`)
        .then(() => atualizaFilmes())
        .catch((erro) => console.error(erro));
    };

    const editarFilme = (id) => {
      console.log(titulo);
      // axios
      //   .put(`https://estao-servidos.onrender.com/filmes/${id}`)
      //   .then(() => atualizaFilmes())
      //   .catch((erro) => console.error(erro));
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
              onChange={handleChange}
              value={titulo}
              ref={ref}
              {...restoDasProps}
            />
            <label className={styles.nomeInput} htmlFor="ano">
              Ano
            </label>
            <input
              className={styles.input}
              type="text"
              id="ano"
              onChange={handleChange}
              value={ano}
            />
            <label className={styles.nomeInput} htmlFor="diretor">
              Direção
            </label>
            <input
              className={styles.input}
              type="text"
              id="direcao"
              onChange={handleChange}
              value={direcao}
            />
            <label className={styles.nomeInput} htmlFor="imagem">
              Imagem
            </label>
            <input
              className={styles.input}
              type="text"
              id="imagem"
              onChange={handleChange}
              value={imagem}
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
  }
);

export default CardFilmes;
