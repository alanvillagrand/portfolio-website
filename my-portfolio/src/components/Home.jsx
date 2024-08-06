import '../styles/Home.css'
import Type from './Type';
import ProfilePicture from '../assets/profile-picture.png'
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

function Home() {

    const navigateTo = (targetId) => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth'});
    };

    return(
        <section id="home">
            <div className="home-text">
                <h1>Hello There!</h1>
                <h1>I'm <span className="name">Alan Villagrand</span></h1>
                <Type />
                <div className="home-buttons">
                    <button onClick={() => navigateTo('about')}>
                        <span className="button-content">About Me <BsPerson /></span>
                    </button>
                    <button onClick={() => navigateTo('contact')}>
                        <span className="button-content">Contact <CgPhone /></span>
                    </button>
                </div>
            </div>
            <div className="home-image">
                <img src={ProfilePicture} alt="" />
            </div>
        </section>
    );
}

export default Home