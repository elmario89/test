import React, {Component} from 'react';

class IntroRating extends Component {
    render() {
        return (
          <div className='tpa-intro-rating'>
              <div className='tpa-intro-rating-box'>
                  <div className='tpa-intro-rating-item'>
                      <div className='tpa-intro-rating-num'><span>6.72</span></div>
                      <div className='tpa-intro-rating-label'>Average</div>
                  </div>
                  <div className='tpa-intro-rating-item'>
                      <div className='tpa-intro-rating-num'>6.8</div>
                      <div className='tpa-intro-rating-label'>Design</div>
                  </div>
                  <div className='tpa-intro-rating-item'>
                      <div className='tpa-intro-rating-num'>7.4</div>
                      <div className='tpa-intro-rating-label'>Usability</div>
                  </div>
                  <div className='tpa-intro-rating-item'>
                      <div className='tpa-intro-rating-num'>5.2</div>
                      <div className='tpa-intro-rating-label'>Motion</div>
                  </div>
              </div>
          </div>
        )
    }
}

export default IntroRating;
