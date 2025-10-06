import React, { useState } from "react";
import "../styles/Layouts/Header.css";
import { Bell, Folder, CheckCircle, UserCircle, XCircle, DotsThree } from "@phosphor-icons/react";

import logo from "../assets/Logo.png";

export default function Header({ isAdmin = true, userName = "Informática" }) {
    const [active, setActive] = useState("Chamados");
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "CHAMADOS", icon: <CheckCircle size={24} weight="fill" className="icon" /> },
        { name: "SETORES", icon: <Folder size={24} weight="fill" className="icon" /> },
    ];

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="header-logo" />
                <h1>HELPDESK</h1>
            </div>

            <nav className={`header-right ${menuOpen ? "open" : ""}`}>
                {isAdmin && (
                    <>
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className={`nav-item ${active === item.name ? "active" : ""
                                    }`}
                                onClick={() => setActive(item.name)}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </>
                )}

                {/* PERFIL */}
                <div
                    className={`nav-item perfil ${active === "Perfil" ? "active" : ""
                        }`}
                    onClick={() => setActive("Perfil")}
                >
                    <UserCircle size={35} weight="fill" color="#fff" className="icon" />
                    <span className="responsive">PERFIL</span>
                    <small>{userName}</small>
                </div>

                {/* NOTIFICAÇÃO */}
                <div
                    className={`nav-item notification ${active === "Notificações" ? "active" : ""
                        }`}
                    onClick={() => setActive("Notificações")}
                >
                    <span className="responsive">NOTIFICAÇÕES</span>
                    <Bell size={30} weight="fill" className="icon" />
                </div>
            </nav>
            {/* MENU HAMBÚRGUER (somente em telas pequenas) */}
            <button
                className={`menu-btn ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <XCircle size={40} color="#fff" back weight="fill" />

                    : <DotsThree size={40} color="#fff" weight="fill" />

                }
            </button>
        </header>
    );

}
