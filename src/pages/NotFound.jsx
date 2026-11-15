
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
    return (
        <div className="notFound">

            <h1>404</h1>

            <h2>Página não encontrada!</h2>

            <p>
                Desculpe, a página que você está procurando não existe.
            </p>

            <Link to="/">
                Voltar para a página inicial
            </Link>

        </div>
    );
};

export default NotFound;
