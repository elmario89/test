import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
          <div className="tpa-footer">
            <div className="tpa-footer-wrap">
              <div className="tpa-footer-container">
                <div className="tpa-footer-container-inner">
                  <div className="tpa-footer-inner">
                    <div className="tpa-footer-col -left">
                      <div nav-hover="nav-hover" className="tpa-footer-links"><a ui-sref="app.jury" ui-sref-active="-active" className="tpa-footer-links-item">
                          <div className="tpa-footer-links-item-inner">
                            <div className="tpa-footer-links-item-inner-rel">Jury</div>
                            <div className="tpa-footer-links-item-inner-abs">Jury</div>
                          </div></a><a ui-sref="app.terms" ui-sref-active="-active" className="tpa-footer-links-item">
                          <div className="tpa-footer-links-item-inner">
                            <div className="tpa-footer-links-item-inner-rel">Terms</div>
                            <div className="tpa-footer-links-item-inner-abs">Terms</div>
                          </div></a><a href="https://www.facebook.com/tappawards" target="_blank" className="tpa-footer-links-item">
                          <div className="tpa-footer-links-item-inner">
                            <div className="tpa-footer-links-item-inner-rel"><i className="tpa-icon -facebook" /><span>Facebook</span></div>
                            <div className="tpa-footer-links-item-inner-abs"><i className="tpa-icon -facebook" /><span>Facebook</span></div>
                          </div></a><a href="https://www.twitter.com/tappawards" className="tpa-footer-links-item">
                          <div className="tpa-footer-links-item-inner">
                            <div className="tpa-footer-links-item-inner-rel"><i className="tpa-icon -twitter" /><span>Twitter</span></div>
                            <div className="tpa-footer-links-item-inner-abs"><i className="tpa-icon -twitter" /><span>Twitter</span></div>
                          </div></a></div>
                      <div className="tpa-footer-copy">Copyright © 2017 Tappawards</div>
                    </div>
                    <div className="tpa-footer-col -right">
                      <div className="tpa-footer-dev">
                        <div className="tpa-footer-dev-text">Site by</div><a href="//cuberto.com/" target="_blank" className="tpa-footer-dev-logo"><i className="tpa-sprite -cuberto" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


export default Footer;
