import React from 'react';
import './List.css'
const List = (props) => {

   const {list} =props;
   
   console.log(list);

  let total = 0;
   for(const skill of list){
    
    total = total + skill.timeRequired;

   }
    
    return (
        <div className='list'>
            
            <div className='user'>
                <div className='user-info'>
                <div>
                <img src="https://64.media.tumblr.com/d95f5003c460c7633705863577782c0d/tumblr_orna54LRtD1wsnerzo1_1280.png" alt="" />
                </div>
                <div className='user-text'>
                    <p><strong>Minhajur</strong> </p>
                    <p>Dhaka,Bangladesh</p>
                </div>
                </div>
                <div className='user-details'> 
                <div><p>75kg <br/> Weight</p>
                </div>
                <div><p>5.11 <br/> height</p></div>
                <div> 22 <br/> Age</div>

                </div>
            </div>
            <div className='add-break'>
                <h3>Add A Break</h3>
                <div className='break'>
                    <div className='break-second'><button className='btn-second'>10s</button></div>   
                    <div className='break-second'><button className='btn-second'>20s</button></div>   
                    <div className='break-second'><button className='btn-second'>30s</button></div>   
                    <div className='break-second'><button className='btn-second'>40s</button></div>   
                       
                </div>
            </div>
            <div className='exercise-details'>
            <h2>Exercise Details</h2>
        <div className='exercise-time'>
            <p><strong>Exercise Time</strong> :  {total} <strong>s</strong></p>
            
        </div>
        <div className='break-time'>

        <p><strong>Break Time</strong> :   </p>

        </div>

            </div>

            <button className='activity'>Activity Completed</button>
        </div>
    );
};

export default List;