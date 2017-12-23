import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IntroRating extends Component {
    render() {
        const rates = this.props.rates;

        return (
          <div className={this.props.internal ? 'tpa-intro-rating -internal' : 'tpa-intro-rating'} >
              <div className='tpa-intro-rating-box'>
                  <div className='tpa-intro-rating-item'>
                      <div className='tpa-intro-rating-num'><span>{rates.common}</span></div>
                      <div className='tpa-intro-rating-label'>Average</div>
                  </div>

                  {Object.keys(rates).map((rate, index) => {
                      if (rate === 'common') return false;
                      return <div className='tpa-intro-rating-item' key={index}>
                          <div className='tpa-intro-rating-num'>{rates[rate]}</div>
                          <div className='tpa-intro-rating-label'>{rate}</div>
                      </div>
                  })}
              </div>
          </div>
        )
    }
}

IntroRating.propTypes = {
    rates: PropTypes.object.isRequired,
    internal: PropTypes.bool
};

export default IntroRating;
