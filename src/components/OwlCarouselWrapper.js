import React, {Component} from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';
import Video from 'src/components/ui/Video';

class OwlCarouselWrapper extends Component {
    renderImage(screen, size) {
        const url = `${screen.url}/${size}`;

        return (
          <div key={screen._id} className='tpa-carousel-item'>
              <div className='tpa-carousel-img'>
                  <img
                    src={url}
                    alt={screen._id}
                  />
              </div>
          </div>
        )
    }

    renderVideo(video) {
        return (
          <div key={video._id} className='tpa-carousel-item'>
              <div className='tpa-carousel-item-inner'>
                  <Video video={video} />
              </div>
          </div>
        )
    }

    render() {
        const size = this.props.size || '410x728';

        return (
          <div className='tpa-carousel'>
              <div className='tpa-carousel-items'>
                  <OwlCarousel
                    className='tpa-carousel'
                    autoplay
                    smartSpeed={600}
                    items={1}
                    margin={20}
                    dots={false}
                  >
                      {this.props.video ? this.renderVideo(this.props.video) : null}
                      {this.props.screens.map(screen => this.renderImage(screen, size))}
                  </OwlCarousel>
              </div>
          </div>
        )
    }
}

OwlCarouselWrapper.propTypes = {
    video: PropTypes.object,
    screens: PropTypes.array.isRequired,
    size: PropTypes.string
};

export default OwlCarouselWrapper;
