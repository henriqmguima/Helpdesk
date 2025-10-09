import "../../styles/Admin.css";
import Header from "../../components/Header"; // ajuste o caminho conforme sua pasta

export default function Setores() {
    return (
        <>
            <Header isAdmin={true} userName="Informática" />

            <div className="page">
                <h1>Setores</h1>
                <p>Gerenciamento de setores.</p>
                <div className="em-desenvolvimento">EM DESENVOLVIMENTO</div>
            </div>
        </>
    );
}
