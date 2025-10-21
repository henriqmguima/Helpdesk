import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Layouts/Header.css";
import {
    Bell,
    Folder,
    CheckCircle,
    UserCircle,
    XCircle,
    DotsThree,
} from "@phosphor-icons/react";
import logo from "../assets/Logo.png";
import { chamadosMock } from "../data/chamados";

export default function Header({ isAdmin = true, userName = "Informática" }) {
    const navigate = useNavigate();

    const [active, setActive] = useState("Chamados");
    const [menuOpen, setMenuOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const profileRef = useRef(null);
    const notificationRef = useRef(null);

    // Criar notificações mock
    useEffect(() => {
        const mock = isAdmin
            ? chamadosMock.map((c) => ({
                id: c.id,
                title: `Chamado no setor ${c.setor} - ${c.titulo}`,
                read: false,
            }))
            : [
                // {
                //     id: 1,
                //     title: "Recuperar código de entrada no setor TI",
                //     read: false,
                // },
            ];
        setNotifications(mock);
    }, [isAdmin]);

    // Fechar menus ao clicar fora
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(e.target)
            ) {
                setShowProfileMenu(false);
            }
            if (
                notificationRef.current &&
                !notificationRef.current.contains(e.target)
            ) {
                setShowNotifications(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNavClick = (name) => {
        setActive(name);
        if (name === "CHAMADOS") navigate("/Chamados");
        if (name === "SETORES") navigate("/Setores");
    };

    const handleProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
        setShowNotifications(false);
    };

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
        setShowProfileMenu(false);

        // Marcar todas como lidas ao abrir
        setNotifications((prev) =>
            prev.map((n) => ({ ...n, read: true }))
        );
    };

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Logo" className="header-logo" />
                <h1>HELPDESK</h1>
            </div>

            <nav className={`header-right ${menuOpen ? "open" : ""}`}>
                {isAdmin && (
                    <>
                        <div
                            className={`nav-item ${active === "CHAMADOS" ? "active" : ""}`}
                            onClick={() => handleNavClick("CHAMADOS")}
                        >
                            <CheckCircle size={24} weight="fill" className="icon" />
                            <span>CHAMADOS</span>
                        </div>
                        <div
                            className={`nav-item ${active === "SETORES" ? "active" : ""}`}
                            onClick={() => handleNavClick("SETORES")}
                        >
                            <Folder size={24} weight="fill" className="icon" />
                            <span>SETORES</span>
                        </div>
                    </>
                )}

                {/* PERFIL */}
                <div className="perfil-wrapper" ref={profileRef}>
                    <div
                        className={`nav-item perfil ${active === "Perfil" ? "active" : ""}`}
                        onClick={handleProfileClick}
                    >
                        <UserCircle size={35} weight="fill" color="#fff" className="icon" />
                        <span className="responsive">PERFIL</span>
                        <small>{userName}</small>
                    </div>

                    {showProfileMenu && (
                        <div className="submenu perfil-menu">
                            <span className="submenu-item config">Configurações</span>
                            <span className="submenu-item logout">
                                <b>Logout</b>
                            </span>
                        </div>
                    )}
                </div>

                {/* NOTIFICAÇÕES */}
                <div className="notification-wrapper" ref={notificationRef}>
                    <div
                        className={`nav-item notification ${active === "Notificações" ? "active" : ""
                            }`}
                        onClick={handleNotificationClick}
                    >
                        <span className="responsive">NOTIFICAÇÕES</span>
                        <Bell size={30} weight="fill" className="icon" />
                        {notifications.some((n) => !n.read) && (
                            <span className="notification-badge" />
                        )}
                    </div>

                    {showNotifications && (
                        <div className="notification-box">
                            {notifications.length === 0 ? (
                                <p>sem notificações</p>
                            ) : (
                                notifications.map((n) => (
                                    <p key={n.id}>{n.title}</p>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </nav>

            {/* MENU HAMBÚRGUER */}
            <button
                className={`menu-btn ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <XCircle size={40} color="#fff" weight="fill" />
                ) : (
                    <DotsThree size={40} color="#fff" weight="fill" />
                )}
            </button>
        </header>
    );
}
