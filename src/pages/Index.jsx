import Header from "../components/Header";
import User from "../components/info_user";
import VisualizacaoUsuario from "../components/User";
import VisualizacaoAdmin from "../components/Admin";
import "../styles/Index.css";
import bannerImg from "../assets/banner.png";
import { useEffect, useState } from "react";
import { DotsThreeCircle, CheckCircle } from "@phosphor-icons/react";

export default function Home({ userType }) {
    const isAdmin = userType === "admin";
    const userName = isAdmin ? "Informática" : "Usuário Comum";

    const [dataAtual, setDataAtual] = useState("");

    useEffect(() => {
        const hoje = new Date();
        const opcoes = { day: "2-digit", month: "2-digit", year: "numeric" };
        setDataAtual(hoje.toLocaleDateString("pt-BR", opcoes));
    }, []);

    const menuItems = [
        {
            name: "Chamados Abertos",
            icon: <DotsThreeCircle size={80} weight="fill" className="icone" color="var(--azul)" />,
            info: "Nenhum chamado aberto"
        },
        {
            name: "Chamados Concluídos",
            icon: <CheckCircle size={80} weight="fill" className="icone" color="var(--verde)" />,
            info: "Nenhum chamado concluído"
        },
    ];

    return (
        <>
            <User userType={userType} />
            <Header isAdmin={isAdmin} userName={userName} />

            {/* === BANNER SUPERIOR === */}
            <section
                className="banner"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}
            >
                <div className="banner-overlay">
                    <h1>HELPDESK</h1>
                    <p>PLATAFORMA DE CHAMADOS DA INFORMÁTICA</p>
                </div>
            </section>

            <div className="page">
                {isAdmin ? (
                    <VisualizacaoAdmin dataAtual={dataAtual} menuItems={menuItems} />
                ) : (
                    <VisualizacaoUsuario />
                )}
            </div>
        </>
    );
}
