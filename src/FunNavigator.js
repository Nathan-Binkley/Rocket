import './index.css';
import FunNavigatorSuggestion from './FunNavigatorSuggestion';
import React, { useState } from 'react';

function FunNavigator(props){
    const [error] = useState(null);
    const [isLoaded] = useState(false);
    var suggestions = [];
    
    for (var i = 0; i < props.images.length; i++) {
        suggestions.push(<FunNavigatorSuggestion img={props.images[i]} txt={props.text[i]}></FunNavigatorSuggestion>);
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
  
  export default FunNavigator;
  