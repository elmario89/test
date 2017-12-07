import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ActionButtonSet extends Component {
    render() {
        return (
          <div className='tpa-intro-actions -right'>
              <button className='tpa-btn_transparent'>
                  <div className='tpa-btn_transparent-hover'></div>
                  <div className='tpa-btn_transparent-hover'></div>
                  <div className='tpa-btn_transparent-inner -square'>
                      <i className='tpa-icon -share' />
                  </div>
              </button>

              <button className='tpa-btn_transparent -xs'>
                  <div className='tpa-btn_transparent-hover'></div>
                  <div className='tpa-btn_transparent-hover'></div>
                  <div className='tpa-btn_transparent-inner -like'><i className='-heart tpa-icon' /><span>{this.props.likeCount}</span></div>
              </button>
          </div>
        )
    }
}

ActionButtonSet.propTypes = {
    likeCount: PropTypes.number.isRequired
};

export default ActionButtonSet;
