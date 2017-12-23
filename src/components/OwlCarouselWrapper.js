import React, {Component} from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';
import Video from 'src/components/ui/Video';

class OwlCarouselWrapper extends Component {
    renderImage(screen, size, appDetails) {
        const url = `${screen.url}/${size}`;

        return (
          <div key={screen._id} className='tpa-carousel-item'>
              <div className={appDetails ? 'tpa-material-screen-img-item': 'tpa-carousel-img'} >
                  <img
                    src={url}
                    alt={screen._id}
                  />
              </div>
          </div>
        )
    }

    renderVideo(video, appDetails) {
        return (
          <div key={video._id} className='tpa-carousel-item'>
              {
                appDetails ? 
                <Video video={video} />
                :
                <div className='tpa-carousel-item-inner'>
                  <Video video={video} />
                </div>
              }
          </div>
        )
    }

    render() {
        const size = this.props.size || '410x728';
        const appDetails = this.props.appDetails || false;

        const options = {
                'appDetails': {
                    center: true,
                    items: 6,
                    nav: false,
                    dots: false,
                    autoWidth: true,
                    margin: 38,
                    responsive: {
                        768: {
                            center: false,
                            items: 1,
                            margin: 30
                        }
                    }
                },
                'common': {
                    autoplay: true,
                    smartSpeed: 600,
                    items: 1,
                    margin: 20,
                    dots: false
                }
            };

        return (
          <div className='tpa-carousel'>
              <div className='tpa-carousel-items'>
                { 
                  this.props.appDetails ?
                    <OwlCarousel
                      className='tpa-carousel'
                      {...options[this.props.appDetails]}
                    >
                        {this.props.video ? this.renderVideo(this.props.video, appDetails) : null}
                        {this.props.screens.map(screen => this.renderImage(screen, size, appDetails))}
                    </OwlCarousel>
                : 
                  <OwlCarousel
                    className='tpa-carousel'
                    {...options['common']}
                  >
                      {this.props.video ? this.renderVideo(this.props.video) : null}
                      {this.props.screens.map(screen => this.renderImage(screen, size))}
                  </OwlCarousel>
                }
              </div>
          </div>
        )
    }
}

OwlCarouselWrapper.propTypes = {
    video: PropTypes.object,
    screens: PropTypes.array.isRequired,
    size: PropTypes.string,
    appDetails: PropTypes.string
};

export default OwlCarouselWrapper;
