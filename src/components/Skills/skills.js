import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript, Reactjs, as well as design software such as Figma and Canva.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>I have an experience of 5 months(Projects) in UI/UX designing. I design webpages from scratch.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>I have an experience of 3 years(Internship & Projects) in Web Development. I'm skilled in Reactjs and other frameworks of JavaScript.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AI-ML Engineer</h2>
                        <p>I have an experience of 7 months(Internship) in Ai-Ml field, and have worked on many ML and DL Domain Projects.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;