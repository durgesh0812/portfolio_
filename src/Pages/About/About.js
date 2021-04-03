import React from 'react';
import './About.css';
// import image from '../../Images/pp157041.jpg';
import image from '../../Utils/Images/pp157041.jpg';
import SkillSection from '../../components/SkillSection/SkillSection'

function About() {
    return (
        <div className='aboutPage'>
            <div className='about_intro'>
            <h1 className="about_head">ABOUT ME</h1>
            <div>
                <img src={image} className="pic" alt=""/>
            </div>
            <SkillSection/>
            </div>
            <div className="about_intro1">
                <div className="about_intro1_about">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p></div>

                <div className='about_details'>
                    <div className='details'>
                        <div className='left-section'>
                        <p>Full Name:</p>
                        <p>Age:</p>
                        <p>Nationality:</p>
                        <p>Languages:</p>
                        <p>Address:</p>
                        
                        </div>
                    
                       
                        
                        <div className='right-section'>
                        <p>DURGESH SIVASHANMUGAM</p>
                        <p>22</p>                                           
                        <p>INDIAN</p>                  
                        <p>ENGLISH,TAMIL</p>                           
                        
                        <p>DOOR NO:A3,BLOCK B,PROSPEROUS SUNRISE APT,GOLDEN GEORGE NAGAR,CHENNAI-107.</p>
                    </div>

                </div>
                </div>
                 <div className='button'>
                 <button className='btn'>Download CV</button>
                 </div>
                 
                </div>
               
                </div>
                
            
            
        
    )
}

export default About
