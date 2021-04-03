import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './SkillSection.css'

function SkillSection() {
    return (
        <div className='skills'>
            <h1>MY SKILLS</h1>
               <div className='skills-container'>
                   <h5 className='skills_title'>JavaScript : </h5>
                   <ProgressBar  classname="progressbar"animated now={60}   style={{width:'50%'}}/>
                   </div>

                   <div className='skills-container'>
                   <h5 className='skills_title'>ReactJs : </h5>
                   <ProgressBar classname="progressbar" animated now={90}  style={{width:'50%'}}/>
                   </div>

                   <div className='skills-container'>
                   <h5 className='skills_title'>Node Js : </h5>
                   <ProgressBar classname="progressbar" animated now={60}  style={{width:'50%'}}/>
                   </div>
                   <div className='skills-container'>
                   <h5 className='skills_title'>HTML : </h5>
                   <ProgressBar classname="progressbar" animated now={60}  style={{width:'50%'}}/>
                   </div>

                   <div className='skills-container'>
                   <h5 className='skills_title'>CSS : </h5>
                   <ProgressBar classname="progressbar" animated now={60}  style={{width:'50%'}}/>
                   </div>
                      
                   
              
            
        </div>
    )
}

export default SkillSection
