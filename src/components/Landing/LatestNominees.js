import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class LatestNominees extends Component {
    render() {
        return (
          <section className='tpa-lastbox'>
            <div className='tpa-lastbox-body'>
              <div className='tpa-lastbox-wrap'>
                <div className='tpa-lastbox-container'>
                  <div className='tpa-lastbox-title'>Latest NOMINEES</div>
                  <div className="tpa-lastbox-items -first">
                    {this.props.nominees.map(nominee => <div key={nominee._id}>{nominee.name}</div>)}
                  </div>
                  <Link to='/winners' className='tpa-lastbox-more'>
                    <div className='tpa-lastbox-more-inner'>
                      <div className='tpa-lastbox-more-text'>Load<span>more</span></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
      );
    }
}

LatestNominees.propTypes = {
    nominees: PropTypes.array.isRequired
};

export default LatestNominees;
