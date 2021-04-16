import React from 'react';
import Stanford from './images/standford.png';
import Stanford1 from './images/standford1.png';
import Stanford2 from './images/standford2.png';
import Stanford3 from './images/standford3.png';
import Stanford4 from './images/standford4.png';
import Stanford5 from './images/standford5.png';
import './pictures.css';


function cambridgepictures() {
    return (
        
    <div className="row">
    <div className="column">
    <img src={Stanford} alt="cambridge" className="change" />
    </div>
    <div className="column">
    <img src={Stanford2} alt="cambridge" className="change"/>
    </div>
    <div className="column">
    <img src={Stanford3} alt="cambridge" className="change"/>
    </div>
    
 <div className="column">
 <img src={Stanford4} alt="cambridge" className="change" />
 </div>
 <div className="column">
 <img src={Stanford5} alt="cambridge" className="change change1"/>
 </div>
 <div className="column">
 <img src={Stanford1} alt="cambridge" className="change "/>
 </div>

</div>
    )
}

export default cambridgepictures
