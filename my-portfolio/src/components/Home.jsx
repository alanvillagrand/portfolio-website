import '../styles/Home.css'
import Type from './Type';
import ProfilePicture from '../assets/profile-picture.png'
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";

function Home() {
    return(
        <section id="home">
            <div className="home-text">
                <h1>Hello There!</h1>
                <h1>I'm <span className="name">Alan Villagrand</span></h1>
                <Type />
                <div className="home-buttons">
                    <button>
                        <span className="button-content">About Me <BsPerson /></span>
                    </button>
                    <button>
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