import React, {Component} from 'react';

import OwlCarousel from 'react-owl-carousel';

class OwlCarouselWrapper extends Component {
    render() {
        return (
          <div className='tpa-carousel'>
              <div className='tpa-carousel-items'>
                  <div className='tpa-carousel-item'>
                      <div className='tpa-carousel-item-inner'>
                          <OwlCarousel
                            className='owl-theme'
                            loop margin={10} nav
                          >
                              <div className='item'><h4>1</h4></div>
                              <div className='item'><h4>2</h4></div>
                              <div className='item'><h4>3</h4></div>
                              <div className='item'><h4>4</h4></div>
                              <div className='item'><h4>5</h4></div>
                              <div className='item'><h4>6</h4></div>
                              <div className='item'><h4>7</h4></div>
                              <div className='item'><h4>8</h4></div>
                              <div className='item'><h4>9</h4></div>
                              <div className='item'><h4>10</h4></div>
                              <div className='item'><h4>11</h4></div>
                              <div className='item'><h4>12</h4></div>
                          </OwlCarousel>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default OwlCarouselWrapper;
