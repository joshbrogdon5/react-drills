import React from 'react';

function Image(props){
    return(
        <div>
            <img src={props.theImage} alt="Mountains" />
        </div>
    )   
}

export default Image