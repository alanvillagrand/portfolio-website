import '../styles/Skills.css'
import SkillCard from './SkillCard'
import HtmlIcon from '../assets/html.svg'
import CssIcon from '../assets/css.svg'
import JavaScriptIcon from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import JavaIcon from '../assets/java.svg'
import CppIcon from '../assets/cpp.svg'
import PythonIcon from '../assets/python.svg'
import MySqlIcon from '../assets/mysql.svg'
import ApacheDerbyIcon from '../assets/apache-derby.svg'
import GitIcon from '../assets/git.svg'
import SpringBootIcon from '../assets/springboot.svg'
import FlaskIcon from '../assets/flask.svg'
import LinuxIcon from '../assets/linux.svg'

function Skills() {

    const frontendSkills = [
        {id: 1, name: "HTML", icon: HtmlIcon},
        {id: 2, name: "CSS", icon: CssIcon},
        {id: 3, name: "JavaScript", icon: JavaScriptIcon},
        {id: 4, name: "React", icon: ReactIcon},
    ];

    const backendSkills = [
        {id: 1, name: "Java", icon: JavaIcon},
        {id: 2, name: "C++", icon: CppIcon},
        {id: 3, name: "Python", icon: PythonIcon},
        {id: 4, name: "MySql", icon: MySqlIcon},
        {id: 5, name: "Apache Derby", icon: ApacheDerbyIcon},
    ];

    const frameworkSkills = [
        {id: 1, name: "Git", icon: GitIcon},
        {id: 2, name: "SpringBoot", icon: SpringBootIcon},
        {id: 3, name: "Flask", icon: FlaskIcon},
        {id: 4, name: "Linux", icon: LinuxIcon},
    ];

    return(
        <div className="skills" data-aos='fade-right'>
            <h1 className='skills-heading'>Techincal Skills</h1>
            <div className="cards">
                <SkillCard title="Frontend" skills={frontendSkills}/>
                <SkillCard title="Backend" skills={backendSkills}/>
                <SkillCard title="Tools & Frameworks" skills={frameworkSkills}/>
            </div>
        </div>
    );
}

export default Skills