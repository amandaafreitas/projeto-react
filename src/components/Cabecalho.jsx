import styles from "./Cabecalho.module.css";
import { Link } from "react-router-dom";
const Cabecalho = () => {
  return (
    <>
      <nav className={styles.cabecalho}>
        <Link to="/">
          <img className={styles.icone} src="/logo-ticket.svg" alt="" />
        </Link>
        <ul className={styles.menu}>
          <Link to="/filmes">
            <li>Filmes</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Cabecalho;
