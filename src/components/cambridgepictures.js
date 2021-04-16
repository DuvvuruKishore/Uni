import React from 'react';
import cambridge from './images/cambridge.png';
import cambridge2 from './images/cambridge2.png';
import cambridge3 from './images/cambridge3.png';
import cambridge4 from './images/cambridge4.png';
import cambridge5 from './images/cambridge5.png';
import cambridge6 from './images/cambridge6.png';


import './pictures.css';


function cambridgepictures() {
    return (
        
    <div className="row">
    
    <div className="column">
    <img src={cambridge} alt="cambridge" className="" />
    </div>
    <div className="column">
    <img src={cambridge2} alt="cambridge" className=""/>
    </div>
    <div className="column">
    <img src={cambridge3} alt="cambridge" className=""/>
    </div>
    
 <div className="column">
 <img src={cambridge4} alt="cambridge" className="change" />
 </div>
 <div className="column">
 <img src={cambridge5} alt="cambridge" className="change"/>
 </div>
 <div className="column">
 <img src={cambridge6} alt="cambridge" className="change"/>
 </div>
 
</div>
    )
}

export default cambridgepictures
