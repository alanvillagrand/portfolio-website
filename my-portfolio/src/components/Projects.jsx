import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import SortingPicture from '../assets/sorting-project.png'
import HotelPicture from '../assets/hotel-project.png'
import PortfolioPicture from '../assets/portfolio-project.png'
import PetAdoptionPicture from '../assets/pet-adoption-project.png'
import JavaIcon from '../assets/java.svg'
import ApacheDerbyIcon from '../assets/apache-derby.svg'
import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import JavaScriptIcon from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import MySQLIcon from '../assets/mysql.svg'
import SpringBootIcon from '../assets/springboot.svg'

function Projects() {

    const petAdoptionSkills = [ReactIcon, JavaIcon, SpringBootIcon, MySQLIcon];
    const petAdopptionDescription = `A pet adoption web application with functionality to create user and admin accounts,
                                     adopt pets, and communicate with local adoption centers. Includes a recommendation algorithm
                                     to personalize pet suggestions. I learned how to lead a team of developers, and create a website
                                     with secure authentication.`;


    const portfolioSkills = [HtmlIcon, CssIcon, JavaScriptIcon, ReactIcon];
    const portfolioDescription = `My personal portfolio website created from scratch using ReactJS. Provides
                                  an interactive and responsive design that showcases my projects
                                  and skills. I learned many React concepts and techniques from this project,
                                  which greatly enhanced my frontend development skills.`;

    const sortingSkills = [JavaIcon];
    const sortingDescription = `A Java program that visualizes common sorting algorithms.
                                This project helped me learn the basics of Java and the 
                                Java Swing library while also enhancing my understanding of
                                essential sorting algorithms.`;
    
    const hotelSkills = [JavaIcon, ApacheDerbyIcon];
    const hotelDescription = `A fullstack application developed using Java that provides a
                              user-friendly experience to simplify the hotel booking process. I
                              learned how to collaborate with other developers, create JUnit test
                              cases, and implement a database with CRUD operations for efficient
                              management of reservation data.`;

    return (
        <section id="projects" data-aos='fade-up'>
            <h1 className="projects-heading">My Projects</h1>
            <div className="projects-container">
                <ProjectCard title="Pet Adoption Website"
                             skills={petAdoptionSkills}
                             picture={PetAdoptionPicture}
                             description={petAdopptionDescription}
                             githubLink="https://github.com/Baylor-SEII-Projects-Fall-2024/pet-adoption-f24-team-1"/>
                <ProjectCard picture={PortfolioPicture}
                             title="Personal Portfolio"
                             skills={portfolioSkills}
                             description={portfolioDescription}
                             githubLink="https://github.com/alanvillagrand/portfolio-website"
                             siteLink="#home"/>
                <ProjectCard picture={HotelPicture}
                             title="Hotel Reservation System"
                             skills={hotelSkills}
                             description={hotelDescription}
                             githubLink="https://github.com/alanvillagrand/CSI-3471-group-project"/>
                <ProjectCard picture={SortingPicture} 
                             title="Sorting Algorithm Visualizer"
                             skills={sortingSkills}
                             description={sortingDescription}
                             githubLink="https://github.com/alanvillagrand/sorting-algorithm-visualizer"/>
            </div>
        </section>
    );
}

export default Projects