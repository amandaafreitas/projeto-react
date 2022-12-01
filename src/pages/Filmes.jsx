import "../styles/filmes.css";
import Rodape from "../components/Rodape";

const Filmes = () => {
  return (
    <>
      <hr />

      <div>
        <h1>Em Cartaz</h1>
      </div>
      <hr />

      <div id="container-filmes">
        <div className="filmes">
          <div className="filme1">
            {" "}
            <h3>Adão negro</h3>
            <div className="zoom">
              <img
                className="imagem"
                src="https://www.barrashopping.com.br/sites/testes/files/cinema/ad__o-negro_1.jpg"
              ></img>{" "}
            </div>
          </div>

          <div className="filme2">
            {" "}
            <h3>Halloween Ens</h3>
            <div className="zoom">
              <img
                className="imagem"
                src="https://www.atoupeira.com.br/wp-content/uploads/2022/10/halloween-ends-poster-final-critica.jpg"
              ></img>
            </div>
          </div>

          <div className="filme3">
            {" "}
            <h3>Lilo, Lilo, Crocodilo</h3>
            <div className="zoom">
              <img
                className="imagem"
                src="https://partageshoppingmossoro.com.br/media/lilo-lilo.jpg"
              ></img>
            </div>
          </div>

          <div className="filme4">
            {" "}
            <h3>Pantera Negra</h3>
            <div className="zoom">
              <img
                className="imagem"
                src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/pantera-negra-wakanda-para-sempre.jpg?"
              ></img>
            </div>
          </div>

          <div className="filme5">
            {" "}
            <h3>A Luz do Demônio</h3>
            <div className="zoom">
              <img
                className="imagem"
                src="https://cloud.estacaonerd.com/wp-content/uploads/2022/07/11194404/A-LUZ.jpg"
              ></img>
            </div>
          </div>

          <div className="filme6">
            {" "}
            <h3>A Mulher Rei</h3>
            <div className="zoom">
              <img
                className="imagem"
                src="https://www.atoupeira.com.br/wp-content/uploads/2022/09/a-mulher-rei-poster-nacional-0609-768x960.jpg"
              ></img>
            </div>
          </div>
        </div>
        <hr />

        <div>
          <h1>Em Breve</h1>
        </div>
        <hr />

        <div id="container-filme">
          <div className="filmes">
            <div className="filme3">
              {" "}
              <h3>A maldicao do quarto 203</h3>
              <div className="zoom">
                <img
                  className="imagem"
                  src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/a-maldicao-do-quarto-203.jpg?"
                ></img>
              </div>
            </div>

            <div className="filme3">
              {" "}
              <h3>Ligacao explosiva</h3>
              <div className="zoom">
                <img
                  className="imagem"
                  src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/ligacao-explosiva.jpg?"
                ></img>
              </div>
            </div>

            <div className="filme3">
              {" "}
              <h3>Noite Infeliz</h3>
              <div className="zoom">
                <img
                  className="imagem"
                  src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/noite-infeliz.jpg?"
                ></img>
              </div>
            </div>

            <div className="filme3">
              {" "}
              <h3>Tubarao : Mar de Sangue</h3>
              <div className="zoom">
                <img
                  className="imagem"
                  src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/tubarao-mar-de-sangue.jpg?"
                ></img>
              </div>
            </div>

            <div className="filme3">
              {" "}
              <h3>Bem-Vindos a Bordo</h3>
              <div className="zoom">
                <img
                  className="imagem"
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSYRYfjXVXzWlYX_udRyYkWmZ628fcHn9ssR8pJtYnoY9zYptLT"
                ></img>
              </div>
            </div>

            <div className="filme3">
              {" "}
              <h3>Ela Disse</h3>
              <div className="zoom">
                <img
                  className="imagem"
                  src="https://www.kinoplex.com.br/filmes/images/cartaz/262x388/ela-disse.jpg?"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Filmes;
