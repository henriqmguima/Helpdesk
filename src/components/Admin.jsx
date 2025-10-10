import "../styles/Admin.css";

export default function Admin({ dataAtual, menuItems }) {
    return (
        <div className="visualizacao-admin">
            <div className="cards-admin">
                {menuItems.map((item, index) => (
                    <div key={index} className="card-admin">
                        {item.icon}
                        <h3>{item.name}</h3>
                        <p className="data">{dataAtual}</p>
                        <p className="info">{item.info}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
