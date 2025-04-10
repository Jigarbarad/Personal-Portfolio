import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/project1.png';
import Portfolio2 from '../../assets/project2.png';
import Portfolio3 from '../../assets/project3.png';
import Portfolio4 from '../../assets/project4.png';
import Portfolio5 from '../../assets/project5.png';
import Portfolio6 from '../../assets/project6.png';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">My Projects</h2>
            <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
                    
                <div className="image-container">
                <img src={Portfolio1} alt="" className="worksImg" />
                <a href="#"><div className="img-title">E-commerce based Motorbike Showroom Webpage</div></a></div>

                <div className="image-container">
                <img src={Portfolio2} alt="" className="worksImg" />
                <a href="https://github.com/Jigarbarad/HR-Sportzz"><div className="img-title">Sports Academy - HRSportzz</div></a></div>

                <div className="image-container">
                <img src={Portfolio3} alt="" className="worksImg" />
                <a href="https://github.com/Jigarbarad/Memory-Game"><div className="img-title">Memoery Game (Flipping card)</div></a></div>

                <div className="image-container">
                <img src={Portfolio4} alt="" className="worksImg" />
                <a href="https://github.com/Jigarbarad/Cricket-Academy-Webpage"><div className="img-title">Cricket Academy Website</div></a></div>

                <div className="image-container">
                <img src={Portfolio5} alt="" className="worksImg" />
                <a href="https://github.com/Jigarbarad/Speech-to-Text"><div className="img-title">Speech to Text Page</div></a></div>

                <div className="image-container">
                <img src={Portfolio6} alt="" className="worksImg" />
                <a href="https://github.com/Jigarbarad/Contact_Us"><div className="img-title">Contact Us</div></a></div>

            </div>
            
            <a href='https://github.com/Jigarbarad?tab=repositories'><button className="workBtn">See More</button></a>
        </section>
    );
}

export default Works;