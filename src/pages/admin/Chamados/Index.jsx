import "../../../styles/Admin.css";
import Header from "../../../components/Header"; // ajuste o caminho conforme sua pasta

export default function Chamados() {
    return (
        <>
            <Header isAdmin={true} userName="Informática" />

            <div className="page">
                <h1>Chamados</h1>
                <p>Lista de chamados em aberto.</p>
                <div className="em-desenvolvimento">EM DESENVOLVIMENTO</div>

            </div>
        </>
    );
}
