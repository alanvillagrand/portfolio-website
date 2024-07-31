import '../styles/About.css'
import { FaFileDownload } from 'react-icons/fa'
import Skills from './Skills'

function About() {
    return (
        <section id="about">
            <div className="about-text">
                <h1 className='about-heading'>About Me</h1>
                <p className='about-paragraph'>
                    Hi, my name is Alan Villagrand. I'm a passionate and driven computer science student
                    at Baylor University. I love to create innovative applications and solve complex problems.
                    With a strong foundation in data strucures, algorithms, and programing technologies, I am eager
                    to continously learn and excel in software engineering
                </p>
                <p className='about-paragraph'>
                    I am actively seeking new opportunities, especially for the summer of 2025. Feel free to contact me here.
                    Apart from my career interests, I love to play soccer, workout, enjoy the outdoors, and meet new people!
                </p>
                <button className='resume-button'>
                    <span className="button-content">Resume<FaFileDownload /></span>
                </button>
            </div>
            <Skills />
        </section>
    );
}

export default About