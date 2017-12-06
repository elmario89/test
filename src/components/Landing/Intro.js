import React, {Component} from 'react';
import PropTypes from 'prop-types';

import IntroRating from 'src/components/IntroRating';
import ActionButtonSet from 'src/components/ActionButtonSet';
import OwlCarousel from 'src/components/OwlCarousel';

import {formatDate} from 'src/helpers';

class Intro extends Component {
    render() {
        const winner = this.props.winner;
        console.log(winner);

        return (
          <section className='tpa-intro'>
              <div className='tpa-intro-body'>
                  <a className='tpa-intro-link'></a>
                  <div style={{backgroundColor: winner.screensBgColor}} className='tpa-intro-fill'></div>
                  <div className='tpa-intro-date'>{formatDate(winner.winDate)}</div>
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
                            <i className={winner.platform === 'ios' ? '-apple tpa-icon' : '-google-play tpa-icon'} />
                            <span>{winner.price.value !== 0 ? `${winner.price.value} ${winner.price.currency}` : 'Free'}</span>
                          </div>
                      </a>
                  </div>
                  <ActionButtonSet likeCount={winner.likeCount} />

                  <div className='tpa-intro-container'>
                      <div className='tpa-intro-wrap'>
                          <div className='tpa-intro-col -first'>
                              <div className='tpa-intro-nominees'>
                                  <h1>#Appoftheday</h1>
                              </div>
                          </div>
                          <div className='tpa-intro-col'>
                              <div className='tpa-intro-slider'>
                                  <OwlCarousel />
                              </div>
                          </div>
                          <div className='tpa-intro-col -last'>
                              <div className='tpa-intro-header'>
                                  <div className='tpa-intro-nominees -sm'>
                                      <h1>#Appoftheday</h1>
                                  </div>
                                  <div className='tpa-intro-subtitle'>
                                      <h2>{winner.name}</h2>
                                  </div>
                                  <div className='tpa-intro-brief'>
                                      <p>
                                          by <span>{winner.developer.name}</span>
                                      </p>
                                  </div>
                                  <IntroRating rates={winner.rates} />
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
