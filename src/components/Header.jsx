
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {

    const navigationLinks = (
        <>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">Sobre</NavLink>
            <NavLink to="/contact">Contatos</NavLink>
        </>
    );

    return (
        <header className="header">

            <div className="headerLogo">
                <h2>Arte em Cerâmica</h2>
                <span>Feito à mão, com carinho</span>
            </div>

            <nav className="navigation" aria-label="Navegação principal">
                {navigationLinks}
            </nav>

        </header>
    );
}

export default Header;
