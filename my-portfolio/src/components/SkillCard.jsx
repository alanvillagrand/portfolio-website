import PropTypes from 'prop-types'

function SkillCard(props) {
    
    const title = props.title;
    const skills = props.skills;

    const skillList = skills.map(skill => <li key={skill.key}><img src={skill.icon} alt="" /> {skill.name}</li>);

    return(
        <div className="skill-card">
            <h2>{title}</h2>
            <ul>{skillList}</ul>
        </div>
    );
}

SkillCard.propTypes = {
    title: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name: PropTypes.string,
                                                icon: PropTypes.string}))
}

SkillCard.defaultProps = {
    title: "Skills",
    skills: [],
}

export default SkillCard