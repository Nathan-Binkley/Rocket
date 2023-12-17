import './index.css';
import Suggestion from './Suggestion';
import React, { useState } from 'react';

function SuggestionsGrid(props){
    const [error] = useState(null);
    const [isLoaded] = useState(false);
    var suggestions = [];
    
    for (var i = 0; i < props.images.length; i++) {
        suggestions.push(<Suggestion img={props.images[i]} txt={props.text[i]}></Suggestion>);
    }
    
    return (
        <>
        <div className='container background-general'>
            <br></br>
            <div className='row'>
                {suggestions}
            </div>
        </div>
    </>
    );
}
  
  export default SuggestionsGrid;
  