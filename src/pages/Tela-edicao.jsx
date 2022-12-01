import "../styles/tela.css";
import "../styles/telaEdicao.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardFilmes from "../components/CardFilmes";

const TelaEdicao = () => {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    axios
      .get("https://estao-servidos.onrender.com/filmes")
      .then((response) => {
        setFilmes(response.data);
      })
      .catch(() => {
        console.log("Deu tudo errado");
      });
  }, []);

  return (
    <>
      <h1>Cadastrar filmes</h1>
      <CardFilmes botao="Cadastrar" setFilmesPagina={setFilmes} />
      <div className="filmesCadastrados">
        {filmes.map((filme) => {
          return (
            <CardFilmes
              key={filme.id}
              idFilme={filme.id}
              titulo={filme.titulo}
              ano={filme.ano}
              direcao={filme.direcao}
              imagem={filme.imagem}
              botao="Salvar"
              setFilmesPagina={setFilmes}
            />
          );
        })}
      </div>
    </>
  );
};
export default TelaEdicao;
