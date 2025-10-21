import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Index";
import Setores from "./pages/admin/Setores";
import Chamados from "./pages/admin/Chamados/Index";
import Historico from "./pages/admin/Chamados/Historico";

// Novos modais
import ModalPerfil from "./components/modais/ModalPerfil";
import ModalChamadoUser from "./components/modais/ModalChamadoUser";
import ModalChamadoAdmin from "./components/modais/ModalChamadoAdmin";

// Componentes
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Form from "./components/Form";
import Notification from "./components/Notification";

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
          <Route path="/Home" element={<Home userType={userType} />} />
          <Route path="/Setores" element={<Setores />} />
          <Route path="/Chamados" element={<Chamados />} />
          <Route path="/Historico" element={<Historico />} />

          {/* Páginas dos modais */}
          <Route path="/modais/ModalPerfil" element={<ModalPerfil />} />
          <Route path="/modais/ModalChamadoUser" element={<ModalChamadoUser />} />
          <Route path="/modais/ModalChamadoAdmin" element={<ModalChamadoAdmin />} />

          {/* Componentes */}
          <Route path="/componentes/Aside" element={<Aside />} />
          <Route path="/componentes/Footer" element={<Footer />} />
          <Route path="/componentes/Header" element={<Header />} />
          <Route path="/componentes/Form" element={<Form />} />
          <Route path="/componentes/Notification" element={<Notification />} />
        </Routes>

        {/* ====== MENU INFERIOR FIXO ====== */}
        <nav className="dev-menu">
          <NavLink to="/" end className="check">Home</NavLink>

          {/* Submenu Modais */}
          <details className="menu2">
            <summary>Modais</summary>
            <div className="menu2-content">
              <NavLink to="/modais/ModalPerfil">Modal Perfil</NavLink>
              <NavLink to="/modais/ModalChamadoUser">Modal Chamado User</NavLink>
              <NavLink to="/modais/ModalChamadoAdmin">Modal Chamado Admin</NavLink>
            </div>
          </details>

          <NavLink to="/Setores">Setores</NavLink>
          <NavLink to="/Chamados">Chamados</NavLink>
          <NavLink to="/Historico">Histórico</NavLink>

          <details className="menu2">
            <summary>Componentes</summary>
            <div className="menu2-content">
              <NavLink to="/componentes/Aside">Aside</NavLink>
              <NavLink to="/componentes/Footer">Footer</NavLink>
              <NavLink to="/componentes/Header">Header</NavLink>
              <NavLink to="/componentes/Form">Form</NavLink>
              <NavLink to="/componentes/Notification">Notification</NavLink>
            </div>
          </details>
        </nav>
      </div>
    </Router>
  );
}
