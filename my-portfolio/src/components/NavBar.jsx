import '../styles/NavBar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

function NavBar() {

    const navigateTo = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth'});
    };

    return(
        <nav>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='logo'>AV</h1>
            <ul className="navbar">
                    <a href="#Home" onClick={() => navigateTo('home')}><AiOutlineHome />Home</a>
                    <a href="#About" onClick={() => navigateTo('about')}><BsPerson />About</a>
                    <a href="#Projects" onClick={() => navigateTo('projects')}><BsCodeSlash />Projects</a>
                    <a href="#Contact" onClick={() => navigateTo('contact')}><CgPhone />Contact</a>
            </ul>
        </nav>
    );
}

export default NavBar