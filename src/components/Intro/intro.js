import React, { Component } from 'react';
import './intro.css';
import bg from '../../assets/jigarImage.png';
import btnImg from '../../assets/downloadResume.png';
import btnImg2 from '../../assets/hireme.png';
// import { Link } from 'react-scroll';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Jigar Barad</span> <br />Web Developer</span>
                <p className="introPara">I am a skilled web developer with an experience in creating<br />dynamic, responsive and user friendly websites.</p>
                <span><a href='./jigar.pdf' download ><button className="btn"><img src={btnImg} alt="resume" className='btnImg'/>My Resume</button></a>
                {/* <a><button className="btn"><img src={btnImg2} alt="resume" className='btnImg'/>Hire me</button></a> */}
                </span>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;