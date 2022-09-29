import React from 'react';
import './Skill.css'
const Skill = (props) => {
    const {picture, name, about, ForAge, TimeRequired} = props.skill;
    // const {listClick} = props;
    return (
        
        <div className='skill'>
            {
                <div>
                    <img src={picture} alt="" />
                    <div className='skill-info'>
                    <p className='skill-name'>{name} </p>
                    <p>{about}</p>
                    <p><strong>For Age :</strong>{ForAge}</p>
                    <p> <strong>Time required :</strong> {TimeRequired}</p>
                    </div>
                    <button  className='btn-skill'>Add to list</button>
                </div>
                

            }
        </div>
    );
};

export default Skill;