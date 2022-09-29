import React from 'react';
import './Qa.css'
const Qa = () => {
    return (
        <div>
            <div className='Qa'>
                <h1>How does react work?</h1>
                <p> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='Qa'>
                <h1>Difference between props and state?</h1>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
            </div>
            <div className='Qa'>
                <h1>How does useEffect do without API load data?</h1>
                <p>lacing useEffect inside the component lets us access the count state variable right from the effect. We don't need a special API to read it — its already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.</p>
            </div>
        <div>

        </div>
        </div>
    );
};

export default Qa;