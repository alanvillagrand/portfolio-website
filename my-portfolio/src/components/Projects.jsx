import '../styles/Projects.css'
import ProjectCard from "./ProjectCard";
import SortingPicture from "../assets/sorting-project.png"

function Projects() {

    const sortingDescription = "A Java program that visualizes common sorting algorithms. " +
                               "This project helped me learn the basics of Java and the Java Swing library.";

    return (
        <section id="projects">
            <h1 className="projects-heading">My Projects</h1>
            <div className="projects-container">
                <ProjectCard picture={SortingPicture} 
                             title="Sorting Algorithm Visualizer"
                             description={sortingDescription}
                             githubLink="https://github.com/alanvillagrand/sorting-algorithm-visualizer"/>
            </div>
        </section>
    );
}

export default Projects