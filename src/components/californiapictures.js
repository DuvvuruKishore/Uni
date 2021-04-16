import React from 'react';
import oxford from './images/california.png';
import oxford1 from './images/california1.png';
import oxford2 from './images/california2.png';
import oxford3 from './images/california3.png';
import oxford4 from './images/california4.png';
import oxford5 from './images/california5.png';
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
