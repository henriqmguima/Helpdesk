import "../styles/Layouts/Aside.css";
import { useState, useEffect } from "react";
import logoCamara from "../assets/logoCharqueadas.png";
import logoCharqueadas from "../assets/logoCharq.png";

// Ícones Phosphor
import { ListDashes, ListMagnifyingGlass, ListChecks, PlusCircle } from "@phosphor-icons/react";

export default function Aside() {
    const [activeItem, setActiveItem] = useState("Todos");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = [
        { name: "Todos", Icon: ListDashes },
        { name: "Abertos", Icon: ListMagnifyingGlass },
        { name: "Fechados", Icon: ListChecks },
        { name: "Criar", Icon: PlusCircle },
    ];

    // Define a logo com base na largura
    const logo = windowWidth <= 768 ? logoCharqueadas : logoCamara;

    return (
        <aside className="aside-dev">
            <ul className="menu-list">
                {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={activeItem === item.name ? "active" : "inactive"}
                        onClick={() => setActiveItem(item.name)}
                    >
                        <span className="icone">
                            <item.Icon size={32} color="#96bed8" weight="bold" />
                        </span>
                        <span className="text">{item.name}</span>
                    </li>
                ))}
            </ul>

        </aside>
    );
}
