import React from 'react';
import harvard from './images/hardvard.png';
import harvard1 from './images/harvard1.png';
import harvard2 from './images/hardvard2.png';
import harvard3 from './images/harvard3.png';
import harvard4 from './images/hardvard4.png';
import harvard5 from './images/hardvard5.png';
import './pictures.css';


function cambridgepictures() {
    return (
        
    <div className="row">
    <div className="column">
    <img src={harvard} alt="cambridge" className="change" />
    </div>
    <div className="column">
    <img src={harvard1} alt="cambridge" className="change"/>
    </div>
    <div className="column">
    <img src={harvard2} alt="cambridge" className="change"/>
    </div>
    
 <div className="column">
 <img src={harvard3} alt="cambridge" className="change" />
 </div>
 <div className="column">
 <img src={harvard4} alt="cambridge" className="change "/>
 </div>
 <div className="column">
 <img src={harvard5} alt="cambridge" className="change change1"/>
 </div>

</div>
    )
}

export default cambridgepictures
