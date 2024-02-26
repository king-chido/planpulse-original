import React from 'react';
import "./decisionreset.css"
import IMAGE from "../../assets/gymlogo.png"
const Decisionreset = () => {
  return (
    <div>
          <div className= "wrapper">
        <div className='upping'>
          <div className='backbtn'>
            <button className='backward'><h1 className='arrow'>←</h1></button>
          </div>
          <div className='pulselogo'>
            <img src= {IMAGE} />
          </div>
        </div>
    <div className='centercard'>
      <div className='decisionmodal'>
        <div className='above'>
          <p>Are You Sure You Want To <span className='resetting'>Reset Password?</span></p>
        </div>
        <div className='reset'>
          <button className='yh'>YES</button>
          <button className='nah'>NO</button>
        </div>
      </div>
      <div className='log'>
        <button className='okay'>OK</button>
      </div>
    </div>
      </div> 
    </div>
  );
  }

export default Decisionreset;
