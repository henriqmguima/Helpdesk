import { useState } from "react";
import { chamadosMock } from "../data/chamados";
import { PlusCircle, CaretCircleDown, CaretDown, Eye } from "@phosphor-icons/react";
import "../styles/User.css";

export default function VisualizacaoUsuario() {
    const [expandido, setExpandido] = useState(true);
    const [filtros, setFiltros] = useState({
        periodo: "Últimos 30 dias",
        ordenar: "Urgência",
        perfil: "Qualquer",
        status: "Todos",
    });

    const [chamados, setChamados] = useState(chamadosMock);

    // Atualiza filtro
    const handleFiltroChange = (campo, valor) => {
        setFiltros({ ...filtros, [campo]: valor });
    };

    // Filtro e ordenação
    const chamadosFiltrados = chamados
        .filter((c) => {
            if (filtros.status === "Resolvidos") return c.resolvido;
            if (filtros.status === "Em andamento") return !c.resolvido;
            return true;
        })
        .sort((a, b) => {
            if (filtros.ordenar === "Urgência") {
                const prioridade = { Alta: 3, Média: 2, Baixa: 1 };
                return prioridade[b.urgencia] - prioridade[a.urgencia];
            }
            return 0;
        });

    return (
        <div className="visualizacao-usuario">
            <div className="abrir-chamado">
                <button className="btn-abrir">
                    ABRIR CHAMADO <PlusCircle size={20} />
                </button>
            </div>

            <div className={`card-chamados ${expandido ? "expandido" : "minimizado"}`}>
                <div className="card-header" onClick={() => setExpandido(!expandido)}>
                    <h2 className="titulo-card">
                        CHAMADOS / <span>ABERTOS</span>
                    </h2>
                    <CaretCircleDown
                        className={`icone-toggle ${expandido ? "ativo" : ""}`}
                        size={26}
                        weight="fill"
                    />
                </div>

                {expandido && (
                    <>
                        <hr />
                        <div className="card-conteudo">
                            <h2 className="quantidade-chamados">
                                {chamadosFiltrados.length} CHAMADOS
                            </h2>

                            <div className="filtros">
                                <div className="filtro">
                                    <span className="label">Período:</span>
                                    <select
                                        value={filtros.periodo}
                                        onChange={(e) => handleFiltroChange("periodo", e.target.value)}
                                    >
                                        <option>Últimos 7 dias</option>
                                        <option>Últimos 30 dias</option>
                                        <option>Últimos 90 dias</option>
                                    </select>
                                </div>

                                <div className="filtro">
                                    <span className="label">Ordenar:</span>
                                    <select
                                        value={filtros.ordenar}
                                        onChange={(e) => handleFiltroChange("ordenar", e.target.value)}
                                    >
                                        <option>Urgência</option>
                                        <option>Perfil</option>
                                        <option>Setor</option>
                                    </select>
                                </div>

                                <div className="filtro">
                                    <span className="label">Status:</span>
                                    <select
                                        value={filtros.status}
                                        onChange={(e) => handleFiltroChange("status", e.target.value)}
                                    >
                                        <option>Todos</option>
                                        <option>Em andamento</option>
                                        <option>Resolvidos</option>
                                    </select>
                                </div>
                            </div>

                            {/* === LISTA DE CHAMADOS === */}
                            <div className="lista-chamados">
                                {chamadosFiltrados.map((c) => (
                                    <div key={c.id} className="chamado-card">
                                        <div className="chamado-topo">
                                            <strong>
                                                {c.titulo} | {c.dataHora} | NÍVEL {c.urgencia.toUpperCase()} DE URGÊNCIA
                                            </strong>
                                        </div>

                                        <div className="chamado-corpo">
                                            <div className="lado-esquerdo">
                                                <p className="titulo-info">PERFIL SOLICITANTE</p>
                                                <p>{c.perfil}</p>
                                                <p className="descricao">{c.descricaoProblema}</p>
                                            </div>

                                            <div className="lado-direito">
                                                <p className="titulo-info">TÉCNICO RESPONSÁVEL</p>
                                                <p>{c.resolvido ? "Concluído" : "Em andamento"}</p>
                                            </div>

                                            <div className="icone-visualizar">
                                                <Eye size={26} weight="fill" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
