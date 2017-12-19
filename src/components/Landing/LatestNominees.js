import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ProjectPreview from 'src/components/ProjectPreview';

class LatestNominees extends Component {
    render() {
        return (
          <section className='tpa-lastbox'>
            <div className='tpa-lastbox-body'>
              <div className='tpa-lastbox-wrap'>
                <div className='tpa-lastbox-container'>
                  <div className='tpa-lastbox-title'>Latest NOMINEES</div>
                  <div className='tpa-lastbox-items -first'>
                    {this.props.nominees.map(nominee => <ProjectPreview key={nominee._id} project={nominee} />)}
                  </div>
                  <Link to='/nominees' className='tpa-lastbox-more'>
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
