import logoimg from "../assets/lg.svg"
import "../styles/header.css"
const Header = () => {
    return (
        <header className="header">
            <nav className="nav-container">
                <div className="logo-container">
                    <img src={logoimg} height="40" className="lg"/>
                </div>
                <ul className="navbar">
                    
                    <li className="nav-el">
                        <a href="../" className="actif hero nav-btn">Home</a>
                    </li>
                    <li className="nav-el">
                        <a href="#" className="about nav-btn">About</a>
                    </li>
                    <li className="nav-el">
                        <a href="#" className="contact nav-btn">Help</a>
                    </li>
                    <li className="nav-el log">
                        <a href="" className="login nav-btn">Contact us</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
export default Header;