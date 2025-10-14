import Header from "../components/Header";
import User from "../components/info_user";
import VisualizacaoUsuario from "../components/User";
import VisualizacaoAdmin from "../components/Admin";
import "../styles/Index.css";
import bannerImg from "../assets/banner.png";
import { useEffect, useState } from "react";
import { DotsThreeCircle, CheckCircle } from "@phosphor-icons/react";
import { chamadosMock } from "../data/chamados"; // importa o mock

export default function Home({ userType }) {
    const isAdmin = userType === "admin";
    const userName = isAdmin ? "Informática" : "Usuário Comum";

    const [dataAtual, setDataAtual] = useState("");
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const hoje = new Date();
        const opcoes = { day: "2-digit", month: "2-digit", year: "numeric" };
        const dataFormatada = hoje.toLocaleDateString("pt-BR", opcoes);
        setDataAtual(dataFormatada);

        // Função para verificar se o chamado é do dia atual
        const isMesmoDia = (dataHora) => {
            const dataChamado = new Date(dataHora.split(" ")[0].split("/").reverse().join("-"));
            return (
                dataChamado.getDate() === hoje.getDate() &&
                dataChamado.getMonth() === hoje.getMonth() &&
                dataChamado.getFullYear() === hoje.getFullYear()
            );
        };

        // Filtra chamados do dia
        const chamadosHoje = chamadosMock.filter((c) => isMesmoDia(c.dataHora));

        const abertosHoje = chamadosHoje.filter((c) => !c.resolvido);
        const resolvidosHoje = chamadosHoje.filter((c) => c.resolvido);

        setMenuItems([
            {
                name: "Chamados Abertos",
                color: "var(--azul)",
                icon: (
                    <DotsThreeCircle
                        size={80}
                        weight="fill"
                        className="icone"
                        color="var(--azul)"
                    />
                ),
                info:
                    abertosHoje.length > 0
                        ? `${abertosHoje.length} chamado(s) aberto(s)`
                        : "Nenhum chamado aberto",
            },
            {
                name: "Chamados Concluídos",
                color: "var(--verde)",
                icon: (
                    <CheckCircle
                        size={80}
                        weight="fill"
                        className="icone"
                        color="var(--verde)"
                    />
                ),
                info:
                    resolvidosHoje.length > 0
                        ? `${resolvidosHoje.length} chamado(s) concluído(s)`
                        : "Nenhum chamado concluído",
            },
        ]);
    }, []);

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
