import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";
const Cabecalho = () => {
  return (
    <>
      <nav className={styles.cabecalho}>
        <img className={styles.icone} src="/logo-ticket.svg" alt="" />
        <ul className={styles.menu}>
          <Link to="/filmes">
            <li>Filmes</li>
          </Link>
          <li>Cinemas</li>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Cabecalho;
