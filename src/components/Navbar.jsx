import { useState } from "react";
// import "../style/style.css"
import "../style/navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
const Navbar=()=>{
    const [menuActive,setMenuActive]=useState(false)
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }
    return(<>
        <header className="header"> 
            <a href="#" className="logo">Portfolio</a>
            <i id="menu-icon" onClick={toggleMenu}><MenuIcon/></i>

            <nav className={`navbar ${menuActive ? 'active' : ''}`}> 
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#sertificate">Certificates</a> 
                <a href="#cantact">Contact</a>   
            </nav>
        </header>
    </>)
}
export default Navbar;