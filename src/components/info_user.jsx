export default function User({ userType }) {
    const isAdmin = userType === "admin";

    return (
        <div className={`info-user ${isAdmin ? "admin" : "user"}`}>
            <p>
                Acesso atual:{" "}
                <strong>{isAdmin ? "Administrador" : "Usuário"}</strong>
            </p>
        </div>
    );
}
