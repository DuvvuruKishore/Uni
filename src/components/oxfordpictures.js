import React from 'react';
import oxford from './images/oxford.png';
import oxford1 from './images/oxford1.png';
import oxford2 from './images/oxford2.png';
import oxford3 from './images/oxford3.png';
import oxford4 from './images/oxford4.png';
import oxford5 from './images/oxford5.png';
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
 <img src={oxford1} alt="cambridge" className="change "/>
 </div>

</div>
    )
}

export default cambridgepictures
