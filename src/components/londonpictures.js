import React from 'react';
import oxford from './images/london.png';
import oxford1 from './images/london1.png';
import oxford2 from './images/london2.png';
import oxford3 from './images/london3.png';
import oxford4 from './images/london4.png';
import oxford5 from './images/london5.png';
import './pictures.css';


function cambridgepictures() {
    return (
        
    <div className="row">
    <div className="column">
    <img src={oxford} alt="cambridge" className="change" />
    </div>
    <div className="column">
    <img src={oxford2} alt="cambridge" className="change"/>
    </div>
    <div className="column">
    <img src={oxford3} alt="cambridge" className="change"/>
    </div>
    
 <div className="column">
 <img src={oxford4} alt="cambridge" className="change" />
 </div>
 <div className="column">
 <img src={oxford5} alt="cambridge" className="change change1"/>
 </div>
 <div className="column">
 <img src={oxford1} alt="cambridge" className="change change1"/>
 </div>

</div>
    )
}

export default cambridgepictures
