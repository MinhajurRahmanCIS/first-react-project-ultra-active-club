import React from 'react';
import './Skills.css'
import { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';
import List from '../List/List';
const Skills = () => {

    const [skills, setSkills] = useState([]);
    const [list, setList] = useState([]);


  
    useEffect(() => {
      fetch("skills.json")
      .then(res => res.json())
      .then(data => setSkills(data))
    }, [])
    
    const listClick = (skill) => {
        console.log(skill)
        const newList = [...list, skill]
        setList(newList);
    }

    return (
        <div className='skills-container'>
         <div className="trainings-container">
            {
                skills.map(skill => <Skill key={skill.id} skill={skill} listClick={listClick}></Skill>)
            }
            
            
         </div>

        <div className="list-container">

            <List></List>

            
        </div>


        </div>
    );
};

export default Skills;