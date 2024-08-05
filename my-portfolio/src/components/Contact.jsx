import React, { useState } from 'react'
import '../styles/Contact.css'
import { FaCheck } from 'react-icons/fa'
import LinkedinIcon from '../assets/linkedin.svg'
import MailIcon from '../assets/mail.svg'
import PhoneIcon from '../assets/phone.svg'

function Contact() {

    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "31531c4e-1699-4fe3-9dad-b9c73bd638df");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          setSubmitted(true);
        }
      };

    return (
        <section id="contact">
            <h1 className='contact-heading'>Contact Me</h1>
            <div className="contact-container">
                <div className="contact-information">
                    <div className="info linked">
                        <img src={LinkedinIcon} alt="" />
                        <p>Alan Villagrand</p>
                    </div>
                    <div className="info mail">
                        <img src={MailIcon} alt="" />
                        <p>alan_villagrand1@baylor.edu</p>
                    </div>
                    <div className="info phone">
                        <img src={PhoneIcon} alt="" />
                        <p>281-455-7606</p>
                    </div>
                </div>
                {submitted ? (
                    <>
                        <h1>Thank You!</h1>
                        <p className='submitted-message'>Your form has been submitted.</p>
                    </>
                ) : (
                    <>
                        <h1>Get In Touch</h1>
                        <form onSubmit={onSubmit} className='contact-form'>
                            <div className="input-box">
                                <label htmlFor='name'>Full Name</label>
                                <input type="text" id='name' name="name" className="field" placeholder="Enter your name" required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor='email'>Email Address</label>
                                <input type="email" id='email' name='email' className="field" placeholder="Enter your email" required/>
                            </div>
                            <div className="input-box">
                                <label htmlFor='message'>Your Message</label>
                                <textarea name="message" className="field area" placeholder="Enter your message" required></textarea>
                            </div>
                            <button type="submit">
                                <span className="button-content">Submit <FaCheck /></span>
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}

export default Contact