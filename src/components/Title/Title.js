import React from 'react';
import './Title.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faSoccerBall} from '@fortawesome/free-solid-svg-icons'
const Title = () => {
    return (
        <div className='title'>
          
            <h1>  <FontAwesomeIcon icon={faSoccerBall} /> eFootball Skill Training Club</h1>
            <h3>Select today's Skill Training </h3>
        </div>
    );
};

export default Title;