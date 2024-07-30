import '../styles/NavBar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";

function NavBar() {
    return(
        <nav>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>AV</h1>
            <ul className="navbar">
                    <a href="#Home"><AiOutlineHome />Home</a>
                    <a href="#About"><BsPerson />About</a>
                    <a href="#Projects"><BsCodeSlash />Projects</a>
                    <a href="#Contact"><CgPhone />Contact</a>
            </ul>
        </nav>
    );
}

export default NavBar