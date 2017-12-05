import React from 'react';

const LikeButton = () => {
    return (
      <button className='tpa-btn_transparent -xs'>
          <div className='tpa-btn_transparent-hover'></div>
          <div className='tpa-btn_transparent-hover'></div>
          <div className='tpa-btn_transparent-inner -like'><i className='-heart tpa-icon'></i><span>15</span></div>
      </button>
    )
};


export default LikeButton;
