import '../styles/About.css'
import { FaFileDownload } from 'react-icons/fa'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr"
import Skills from './Skills'

function About() {
    return (
        <section id="about">
            <div className="about-text">
                <h1 className='about-heading'>About Me</h1>
                <p className='about-paragraph'>
                    Hi, my name is Alan Villagrand. I'm a passionate and driven computer science student
                    at <span className="highlighted">Baylor University</span>. I love to create innovative applications and solve complex problems.
                    With a strong foundation in data strucures, algorithms, and programing technologies, I am eager
                    to continously learn and excel in software engineering
                </p>
                <p className='about-paragraph'>
                    I am actively seeking new opportunities, especially for the summer of 2025. Feel free to contact me <a href="">here</a>.
                    Apart from my career interests, I love to play soccer, workout, enjoy the outdoors, and meet new people!
                </p>
                <div className="links">
                    <a href="https://www.linkedin.com/in/alan-villagrand/" target="_blank">
                        <FaLinkedin size={40}/>
                    </a>
                    <a href="https://github.com/alanvillagrand" target="_blank">
                        <FaGithub size={40}/>
                    </a>
                    <a href="mailTo:alan_villagrand1@baylor.edu">
                        <GrMail size={40}/>
                    </a>
                </div>
                {/* <button className='resume-button'>
                    <span className="button-content">Resume<FaFileDownload /></span>
                </button> */}
            </div>
            <Skills />
        </section>
    );
}

export default About