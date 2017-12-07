import React, {Component} from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';

class OwlCarouselWrapper extends Component {
    renderImage(screen) {
        return (
          <div key={screen._id} className='tpa-carousel-item'><div className='tpa-carousel-img'><img src={screen.url} alt=''/></div></div>
        )
    }

    renderVideo(video) {
        return (
          <div className='tpa-carousel-item'>
              <div className='tpa-carousel-item-inner'>
                  <video autoPlay className='tpa-carousel-item-video'>
                      <source src={this.props.video.url} type='video/mp4'/>
                      Your browser does not support the video tag.
                  </video>
              </div>
          </div>
        )
    }

    render() {
        return (
          <div className='tpa-carousel'>
              <div className='tpa-carousel-items'>
                  <OwlCarousel
                    className='tpa-carousel'
                    autoplay
                    items={1}
                    margin={10}
                  >
                      {this.props.video ? this.renderVideo(this.props.video) : null}
                      {this.props.screens.map(screen => this.renderImage(screen))}
                  </OwlCarousel>
              </div>
          </div>
        )
    }
}

OwlCarouselWrapper.propTypes = {
    video: PropTypes.object,
    screens: PropTypes.array.isRequired,
};

export default OwlCarouselWrapper;
