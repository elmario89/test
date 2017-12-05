import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IntroRating from 'src/components/IntroRating';
import ButtonSet from 'src/components/ButtonSet';

class Intro extends Component {
    render() {
        const winner = this.props.winner;
        console.log(winner);

        return (
          <section className='tpa-intro'>
              <div className='tpa-intro-body'>
                  <a className='tpa-intro-link'></a>
                  <div style={{backgroundColor: 'rgb(76, 222, 200)'}} className='tpa-intro-fill'></div>
                  <div className='tpa-intro-date'>{winner.winDate}</div>
                  <div className='tpa-intro-actions'>
                      <a className='tpa-btn_transparent'>
                          <div className='tpa-btn_transparent-hover'></div>
                          <div className='tpa-btn_transparent-hover'></div>
                          <div className='tpa-btn_transparent-inner'>
                              <span>see Case</span>
                          </div>
                      </a>

                      <a target='_blank' className='tpa-btn_transparent'>
                          <div className='tpa-btn_transparent-hover'></div>
                          <div className='tpa-btn_transparent-hover'></div>
                          <div className='tpa-btn_transparent-inner'>
                          <i className='-apple tpa-icon'></i>
                          <span>Free</span>
                        </div>
                      </a>
                  </div>
                  <ButtonSet />

                  <div className='tpa-intro-container'>
                      <div className='tpa-intro-wrap'>
                          <div className='tpa-intro-col -first'>
                              <div className='tpa-intro-nominees'>
                                  <h1>#Appoftheday</h1>
                              </div>
                          </div>
                          <div className='tpa-intro-col'>
                              <div className='tpa-intro-slider'>
                                  <div className='tpa-carousel'>
                                      <div className='tpa-carousel-items'>
                                          <div className='tpa-carousel-item'>
                                              <div className='tpa-carousel-item-inner'>

                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='tpa-intro-col -last'>
                              <div className='tpa-intro-header'>
                                  <div className='tpa-intro-nominees -sm'>
                                      <h1>#Appoftheday</h1>
                                  </div>
                                  <div className='tpa-intro-subtitle'>
                                      <h2>Google trips</h2>
                                  </div>
                                  <div className='tpa-intro-brief'>
                                      <p>
                                          by <span>Google inc</span>
                                      </p>
                                  </div>
                                  <IntroRating />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}

Intro.propTypes = {
    winner: PropTypes.object.isRequired
};

export default Intro;
