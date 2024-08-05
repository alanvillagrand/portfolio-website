import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr"

function Footer() {

    return(
        <footer>
            <h4>&copy; {new Date().getFullYear()} Alan Villagrand | All Rights Reserved</h4>
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/alan-villagrand/" target="_blank">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/alanvillagrand" target="_blank">
                    <FaGithub />
                </a>
                <a href="mailTo:alan_villagrand1@baylor.edu">
                    <GrMail />
                </a>
            </div>
        </footer>
    );
}

export default Footer