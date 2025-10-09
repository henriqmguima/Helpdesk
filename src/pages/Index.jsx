import Header from "../components/Header"; // ajuste o caminho conforme sua pasta

export default function Home() {
    return (
        <>
            <Header isAdmin={true} userName="Informática" />
            <div className="page">
                <h1>Página Inicial</h1>
                <p>Bem-vindo ao sistema Helpdesk</p>
                <div className="em-desenvolvimento">EM DESENVOLVIMENTO</div>
            </div>
        </>

    );
}
