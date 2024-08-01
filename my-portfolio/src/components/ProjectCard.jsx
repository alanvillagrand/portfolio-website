import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa';
import { CgFileDocument } from 'react-icons/cg'

function ProjectCard(props) {

    const picture = props.picture;
    const title = props.title;
    const description = props.description;

    const directToLink = (targetLink) => {
        window.open(targetLink, '_blank');
    };

    return(
        <div className="project-card">
            <img className="project-image" src={picture} alt="" />
            <h2 className="project-heading">{title}</h2>
            <p>{description}</p>
            <div className="project-buttons">
                {props.githubLink && (
                    <button onClick={() => directToLink(props.githubLink)}>
                        <span className="button-content"><FaGithub /> GitHub</span>
                    </button>
                )}
                {props.siteLink && (
                    <button onClick={() => directToLink(props.siteLink)}>
                        <span className="button-content"><CgFileDocument /> Site</span>
                    </button>
                )}
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    picture: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    githubLink: PropTypes.string,
    siteLink: PropTypes.string,
}

ProjectCard.defaultProps = {
    picture: "https://via.placeholder.com/300",
    title: "Project",
    description: "This is my project.",
}

export default ProjectCard