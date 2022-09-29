import React from 'react';
import './List.css'
const List = ({list}) => {
    
    return (
        <div>
            <h2>Info</h2>
            <p>Select Item: {list.length}</p>
        </div>
    );
};

export default List;