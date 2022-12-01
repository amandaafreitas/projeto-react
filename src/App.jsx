// import reactLogo from './assets/react.svg'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TelaEdicao from "./pages/Tela-edicao";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/tela-edicao" element={<TelaEdicao />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
