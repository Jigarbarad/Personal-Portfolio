import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aw0woog', 'template_wsuxybs', form.current, '7ituiY6A7cX7oa_U3')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contactPage'>

            
            <div id="certifications">
                <h1 className="contactPageTitle">My Certifications</h1>
                <span className="certDesc">
                    I have earned several certifications from trusted platforms that validate my skills.
                </span>
                <div className="certListWrapper">
                    <div className="certList">
                        <a href="https://drive.google.com/file/d/1A07XlKJBom3z0l5KHgz8UT5MNK_FS7W0/view?usp=sharing" target="_blank" className="certItem">Completion Certificate of an Internship - CodSoft</a>

                        <a href="https://drive.google.com/file/d/1n0XOULtFLG2K-7OWQIaVicik1byriV1f/view?usp=sharing" target="_blank" className="certItem">Great Learning AI for Beginners - Great Learning</a>

                        <a href="https://drive.google.com/file/d/1BWdJa-DcN8p4568JGTuaGaCnGo-1LMXz/view?usp=sharing" target="_blank" className="certItem">Completion Certificate of Course by IBM</a>

                        <a href="https://drive.google.com/file/d/1jj95fK5K6tq7C2gfjd9IMrCjfG5yhU0o/view?usp=sharing" target="_blank" className="certItem">Completion Certificate of an Internship - Octanect</a>

                        <a href="https://drive.google.com/file/d/1jUn4nwxa_tJHYhzLB0FfiW_TfQzTQPhN/view?usp=sharing" target="_blank" className="certItem">OJT certificate from Rooman TEchnologies</a>

                        <a href="https://drive.google.com/file/d/1SkL_0cbhvxrnzHLWGvb9D02AMquPDvk5/view?usp=sharing" target="_blank" className="certItem">Certificate for Completion of PHP and MySQL Training - IITB</a>

                        <a href="https://drive.google.com/file/d/1FcTYNoMXEVDq0Yc7GgDrpNAz371jX2Vj/view?usp=sharing" target="_blank" className="certItem">Certificate of Accomplishment in SQL - HackerRank</a>
                    </div>
                </div>
            </div>

    
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg'></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href="www.facebook.com"><img src={facebookIcon} alt="Facebook" className="link" /></a>
                        <a href="www.twitter.com"><img src={twitterIcon} alt="Twitter" className="link" /></a>
                        <a href="www.youtube.com"><img src={youtubeIcon} alt="YouTube" className="link" /></a>
                        <a href="www.instagram.com"><img src={instagramIcon} alt="Instagram" className="link" /></a>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Contact;
