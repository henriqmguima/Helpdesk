import React, { useState } from "react";
import "../styles/Layouts/Header.css";
import { Bell, Folder, CheckCircle, UserCircle, XCircle, DotsThree } from "@phosphor-icons/react";
import logo from "../assets/Logo.png";

export default function Header({ isAdmin = true, userName = "Informática" }) {
    const [active, setActive] = useState("Chamados");
    const [menuOpen, setMenuOpen] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const menuItems = [
        { name: "CHAMADOS", icon: <CheckCircle size={24} weight="fill" className="icon" /> },
        { name: "SETORES", icon: <Folder size={24} weight="fill" className="icon" /> },
    ];

    const handleProfileClick = () => {
        setShowProfileMenu(!showProfileMenu);
        setShowNotifications(false);
    };

    const handleNotificationClick = () => {
        setShowNotifications(!showNotifications);
        setShowProfileMenu(false);
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
                        {menuItems.map((item) => (
                            <div
                                key={item.name}
                                className={`nav-item ${active === item.name ? "active" : ""}`}
                                onClick={() => setActive(item.name)}
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </div>
                        ))}
                    </>
                )}

                {/* PERFIL */}
                <div className="perfil-wrapper">
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
                            <span className="submenu-item logout"><b>Logout</b></span>
                        </div>
                    )}
                </div>

                {/* NOTIFICAÇÕES */}
                <div className="notification-wrapper">
                    <div
                        className={`nav-item notification ${active === "Notificações" ? "active" : ""}`}
                        onClick={handleNotificationClick}
                    >
                        <span className="responsive">NOTIFICAÇÕES</span>
                        <Bell size={30} weight="fill" className="icon" />
                    </div>

                    {showNotifications && (
                        <div className="notification-box">
                            <p>sem notificações</p>
                        </div>
                    )}
                </div>
            </nav>

            {/* MENU HAMBÚRGUER (somente em telas pequenas) */}
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
