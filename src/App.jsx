// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaEdicao from "./pages/Tela-edicao";
import Login from "./pages/Login";
import Cabecalho from "./components/Cabecalho";

function App() {
  return (
    <>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tela-edicao" element={<TelaEdicao />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
