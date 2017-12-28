import React, {Component} from 'react';
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';
import Video from 'src/components/ui/Video';

// import $ from ‘jquery’;

class OwlCarouselWrapper extends Component {
    constructor() {
        super();

        this.handleHover = this.handleHover.bind(this);
    }

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

    fireEvent(elem, type, carousel) {
      console.log(elem);
      const evt = elem.createEvent('Events');

      evt.initEvent( type, true, true, window, 1);

      carousel.dispatchEvent(evt);
    }

    handleHover(e, id) {
      // let evt = e.createEvent('Events');

      // evt.initEvent( type, true, true, window, 1);

      // elem.dispatchEvent(evt);
      // console.log(e.target, id);
      // const carousel = document.querySelector(`#${id}`);
      // this.fireEvent(document, 'add.owl.carousel', carousel);
        // .trigger('add.owl.carousel', ['<div class='item'><p>1</p></div>'])
        // .trigger('refresh.owl.carousel');
        // .trigger('add.owl.carousel', ['<div class='item'><p>1</p></div>'])
        // .trigger('refresh.owl.carousel');

      // e.target.trigger('add.owl.carousel', [<div>1</div>])
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
                    id={`owl-carousel${this.props.screens[0]._id}`}
                    className='tpa-carousel'
                    {...options['common']}
                    onMouseEnter={(e) => this.handleHover(e, `owl-carousel${this.props.screens[0]._id}`)}
                  >
                      {/*{this.props.video ? this.renderVideo(this.props.video) : null}*/}
                      {this.props.screens.map(screen => this.renderImage(screen, size))}
                      {this.renderImage(this.props.screens[0], size)}
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
