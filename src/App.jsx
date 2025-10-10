import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Index";
import ModalIndex from "./pages/ModalIndex";
import Setores from "./pages/admin/Setores";
import Chamados from "./pages/admin/Chamados/Index";
import Historico from "./pages/admin/Chamados/Historico";

// Componentes
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import Notification from "./components/Notification";
import Ticket from "./components/Ticket";
// import UserModal from "./components/UserModal";

import "./App.css";

export default function App() {
  const [userType, setUserType] = useState(null); // "admin" ou "user"

  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Página inicial de seleção */}
          <Route
            path="/"
            element={
              <div className="select-user-type">
                <h1>Escolha o tipo de acesso</h1>
                <div className="btn-group">
                  <NavLink
                    to="/home"
                    onClick={() => setUserType("admin")}
                    className="btn-select"
                  >
                    Entrar como Admin
                  </NavLink>
                  <NavLink
                    to="/home"
                    onClick={() => setUserType("user")}
                    className="btn-select"
                  >
                    Entrar como Usuário
                  </NavLink>
                </div>
              </div>
            }
          />

          {/* Páginas principais */}
          <Route path="/home" element={<Home userType={userType} />} />
          <Route path="/modalIndex" element={<ModalIndex />} />
          <Route path="/setores" element={<Setores />} />
          <Route path="/chamados" element={<Chamados />} />
          <Route path="/historico" element={<Historico />} />

          {/* Componentes */}
          <Route path="/componentes/aside" element={<Aside />} />
          <Route path="/componentes/footer" element={<Footer />} />
          <Route path="/componentes/header" element={<Header />} />
          <Route path="/componentes/form" element={<Form />} />
          <Route path="/componentes/notification" element={<Notification />} />
          <Route path="/componentes/ticket" element={<Ticket />} />
          {/* <Route path="/componentes/usermodal" element={<UserModal />} /> */}
        </Routes>

        {/* ====== MENU INFERIOR FIXO ====== */}
        <nav className="dev-menu">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/modalIndex">Modais</NavLink>
          <NavLink to="/setores">Setores</NavLink>
          <NavLink to="/chamados">Chamados</NavLink>
          <NavLink to="/historico">Histórico</NavLink>

          <details className="menu2">
            <summary>Componentes</summary>
            <div className="menu2-content">
              <NavLink to="/componentes/aside" className="check">Aside</NavLink>
              <NavLink to="/componentes/footer">Footer</NavLink>
              <NavLink to="/componentes/header" className="check">Header</NavLink>
              <NavLink to="/componentes/form">Form</NavLink>
              <NavLink to="/componentes/notification">Notification</NavLink>
              <NavLink to="/componentes/ticket">Ticket</NavLink>
            </div>
          </details>
        </nav>
      </div>
    </Router>
  );
}
