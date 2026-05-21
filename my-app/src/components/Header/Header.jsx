import './Header.css'
import Logo from '../../assets/icons/logo-fulltech.png'

function Header(){
    
    return (
        <div className='logo'>
            <h1 className="title">Catálogo de Produtos</h1>
            <img src={Logo} alt="Logo" />
        </div>
    )
}

export default Header;