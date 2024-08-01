import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import SortingPicture from '../assets/sorting-project.png'
import HotelPicture from '../assets/hotel-project.png'

function Projects() {

    const sortingDescription = `A Java program that visualizes common sorting algorithms.
                                This project helped me learn the basics of Java and the 
                                Java Swing library while also enhancing my understanding of
                                essential sorting algorithms.`;
    
    const hotelDescription = `A hotel reservation system developed using Java that provides a
                              user-friendly experience to simplify the hotel booking process. I
                              learned how to collaborate with other developers and implement an
                              H2 database schema for efficient storage and management of reservation
                              data.`;

    return (
        <section id="projects">
            <h1 className="projects-heading">My Projects</h1>
            <div className="projects-container">
                <ProjectCard />
                <ProjectCard picture={HotelPicture}
                             title="Hotel Reservation System"
                             description={hotelDescription}
                             githubLink="https://github.com/alanvillagrand/CSI-3471-group-project"/>
                <ProjectCard picture={SortingPicture} 
                             title="Sorting Algorithm Visualizer"
                             description={sortingDescription}
                             githubLink="https://github.com/alanvillagrand/sorting-algorithm-visualizer"/>
            </div>
        </section>
    );
}

export default Projects