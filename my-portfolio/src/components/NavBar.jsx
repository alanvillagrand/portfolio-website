import '../styles/NavBar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import Menu from '../assets/menu.svg'
import Close from '../assets/close.svg'

function NavBar() {

    const navigateTo = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth'});
        const sidebar = document.getElementById('sidebar-active');
        sidebar.checked = false;
    };

    return(
        <nav>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='logo'>AV</h1>
            <ul className="navbar">
                <input type="checkbox" id='sidebar-active' />
                <label id='overlay' for='sidebar-active'></label>
                <label for='sidebar-active' className='open-sidebar-button'>
                    <img src={Menu} alt="" />
                </label>
                <div className="links-container">
                        <label for='sidebar-active' className='close-sidebar-button'>
                            <img src={Close} alt="" />
                        </label>
                        <a href="#Home" onClick={() => navigateTo('home')}><AiOutlineHome />Home</a>
                        <a href="#About" onClick={() => navigateTo('about')}><BsPerson />About</a>
                        <a href="#Projects" onClick={() => navigateTo('projects')}><BsCodeSlash />Projects</a>
                        <a href="#Contact" onClick={() => navigateTo('contact')}><CgPhone />Contact</a>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar