import React from "react";
import featureimage from '../images/Frame 19.png';

function Features() {
    return (
        <div id='features'>
            <div className='features-model'>
                <img src={featureimage} alt='feature-image'/>
            </div>
            <div className='features-text'>
                <h2>Features</h2>
                <h3>This application <span>Software </span>is Art</h3>
            </div>
            
        </div>
    )
}

export default Features;