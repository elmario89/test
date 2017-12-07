import React, {Component} from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';

class OwlCarouselWrapper extends Component {
    constructor() {
        super();
        this.state = {videoIsLoaded: false}
    }

    componentDidMount() {
        const video = this.refs.winnerVideo;

        video.oncanplay = function() {
            this.setState({videoIsLoaded: true});
            video.play();
        }.bind(this);
    }

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
                  <video ref='winnerVideo' loop muted className='tpa-carousel-item-video'>
                      <source src={video.url} type='video/mp4'/>
                      Your browser does not support the video tag.
                  </video>

                  {!this.state.videoIsLoaded ? <div className='tpa-loader'><span /></div> : null}
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
                    smartSpeed={600}
                    items={1}
                    margin={20}
                  >
                      {this.props.video ? this.renderVideo(this.props.video) : null}
                      {this.props.screens.map(screen => this.renderImage(screen, '410x728'))}
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
