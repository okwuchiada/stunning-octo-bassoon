import { Link } from 'react-router-dom';
import '../Styles/header.css'

function Header() {
    return (
        <nav className="nav-bar">
           <div className="logo">
             <h3> Seven Graphics</h3>   
            </div> 
            <ul className="nav-links">
                <li>
                    <Link to="/about" className="nav-link"> About </Link>
                </li>
                <li>
                <Link to="/catalogue" className="nav-link"> Catalogue </Link>
                    
                </li>
                <li>
                <Link to="/contact" className="nav-link"> Contact </Link>
                
                </li>
            </ul>
        </nav>
    )
}

export default Header
