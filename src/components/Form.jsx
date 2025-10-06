import "../styles/Layouts/Form.css";

export default function Form() {
    return (
        <form className="form-dev">
            <h2>Formulário</h2>
            <input type="text" placeholder="Digite algo..." />
            <button type="submit">Enviar</button>
        </form>
    );
}
