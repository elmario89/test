import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LatestNominees extends Component {
    render() {
        return (
          <section className="tpa-lastbox">
            <div className="tpa-lastbox-body">
              <div className="tpa-lastbox-wrap">
                <div className="tpa-lastbox-container">
                  <div className="tpa-lastbox-title">Latest NOMINEES</div><a ui-sref="app.nominees({page:1})" className="tpa-lastbox-more">
                    <div className="tpa-lastbox-more-inner">
                      <div className="tpa-lastbox-more-text">Load<span>more</span></div>
                    </div></a>
                </div>
              </div>
            </div>
          </section>
      );
    }
}


export default LatestNominees;
