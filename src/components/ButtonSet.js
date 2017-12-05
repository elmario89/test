import React from 'react';

const ButtonSet = () => {
    return (
      <div className='tpa-intro-actions -right'>
          <button className='tpa-btn_transparent'>
              <div className='tpa-btn_transparent-hover'></div>
              <div className='tpa-btn_transparent-hover'></div>
              <div className='tpa-btn_transparent-inner -square'>
                  <i className='tpa-icon -share'></i>
              </div>
          </button>

          <button className='tpa-btn_transparent -xs'>
              <div className='tpa-btn_transparent-hover'></div>
              <div className='tpa-btn_transparent-hover'></div>
              <div className='tpa-btn_transparent-inner -like'><i className='-heart tpa-icon'></i><span>15</span></div>
          </button>
      </div>
    )
};


export default ButtonSet;
