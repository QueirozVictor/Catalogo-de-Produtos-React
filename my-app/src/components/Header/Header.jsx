import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/icons/logo-fulltech.png';

function Header() {
  const { pathname } = useLocation();
  const viewingAllProducts = pathname === '/todos-produtos';

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" to="/" aria-label="FullTech, início">
          <img src={Logo} alt="FullTech" />
        </Link>
        <div className="site-header__copy">
          <p className="site-header__eyebrow">Tecnologia para o seu dia a dia</p>
          <h1>Catálogo de produtos</h1>
        </div>
        <Link className="site-header__link" to={viewingAllProducts ? '/' : '/todos-produtos'}>
          <span className="site-header__link-label">{viewingAllProducts ? 'Voltar à Home' : 'Ver todos os produtos'}</span>
          <span aria-hidden="true">{viewingAllProducts ? '↑' : '→'}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
