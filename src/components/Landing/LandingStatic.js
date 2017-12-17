import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class LandingStatic extends Component {
    render() {
        return (
          <div>
              <section className='tpa-splitbox -primary'>
                  <div className='tpa-splitbox-inner'>
                      <div className='tpa-splitbox-col -fill'>
                          <div className='tpa-splitbox-body'>
                              <div className='tpa-splitbox-body-inner'>
                                  <div className='tpa-splitbox-img'><img src={require('../../assets/img/about/appofthemonth.png')} srcSet={require('../../assets/img/about/appofthemonth@2x.png')} alt='App Of The Month'/></div>
                              </div>
                          </div>
                      </div>
                      <div className='tpa-splitbox-col -quaternary'>
                          <div className='tpa-splitbox-body'>
                              <div className='tpa-splitbox-body-inner'>
                                  <div className='tpa-container'>
                                      <div className='tpa-container-inner'>
                                          <div className='tpa-splitbox-header'>
                                              <h2><span>About</span><span>Tappawards</span></h2>
                                              <hr/>
                                          </div>
                                          <div className='tpa-splitbox-brief'>
                                              <p>Of the hundreds of thousands of apps flooding the market, we select and showcase the most innovative, on-trend ones. Tappawards is more than just an award. It's a source of inspiration for designers, developers, and media organizations.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className='tpa-splitbox'>
                  <div style={{backgroundImage: `url(${require('../../assets/img/about/middle.jpg')}`}} className='tpa-splitbox-bg'></div>
              </section>
              <section className='tpa-splitbox -small'>
                  <div className='tpa-splitbox-inner'>
                      <div className='tpa-splitbox-col -overflow'>
                          <div className='tpa-splitbox-body'>
                              <div className='tpa-splitbox-body-inner'>
                                  <div className='tpa-container'>
                                      <div className='tpa-container-inner'>
                                          <div className='tpa-splitbox-lines -left'></div>
                                          <div className='tpa-splitbox-header'>
                                              <h2><span>Evalution</span><span>System</span></h2>
                                              <hr/>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className='tpa-splitbox-col'>
                          <div className='tpa-splitbox-body'>
                              <div className='tpa-splitbox-body-inner'>
                                  <div className='tpa-splitbox-container'>
                                      <div className='tpa-splitbox-brief'>
                                          <p>Tappawards gathers intel on the best applications and presents it on a sleek, intuitive dashboard to a panel of respected, app-industry experts. The panel reviews the nominations for usability, design, and motion design.</p>
                                          <p>Best of all, Tappawards encourages users just like you to nominate your favorite applications for App of the Day, App of the Month, and App of the Year.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              <section className='tpa-splitbox'>
                  <div className='tpa-splitbox-inner'>
                      <div className='tpa-splitbox-col -warning'>
                          <div className='tpa-splitbox-body'>
                              <div className='tpa-splitbox-body-inner'>
                                  <div className='tpa-container'>
                                      <div className='tpa-container-inner'>
                                          <div className='tpa-splitbox-lines -top'></div>
                                          <div className='tpa-splitbox-icon'><i className='tpa-icon -saturn'></i></div>
                                          <div className='tpa-splitbox-header -official'>
                                              <h2><span>Offical</span><span>Certificates</span></h2>
                                              <hr/>
                                          </div>
                                          <div className='tpa-splitbox-brief'>
                                              <p>We know all about the effort and ingenuity that go into beautiful, intuitive applications, so we show our love to the most outstanding apps with Tappawards trophies.</p>
                                              <p>In any app category, every winner is unique, and so is every certificate.</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div style={{display: 'block'}} className='tpa-splitbox-col -height -indent'>
                          <div style={{backgroundImage: `url(${require('../../assets/img/about/certificates@2x.jpg')}`}} className='tpa-splitbox-bg -position'></div>
                      </div>
                  </div>
              </section>
              <section className='tpa-splitbox -tiny'>
                  <div className='tpa-splitbox-body'>
                      <div className='tpa-splitbox-body-inner'>
                          <div className='tpa-splitbox-jury'>
                              <div className='tpa-splitbox-jury-container'>
                                  <div className='tpa-splitbox-jury-inner'>
                                      <div className='tpa-splitbox-jury-col'>
                                          <div className='tpa-splitbox-lines -xs'></div>
                                          <div className='tpa-splitbox-header -jury'>
                                              <h2><span>Jury</span></h2>
                                              <hr/>
                                          </div>
                                      </div>
                                      <div className='tpa-splitbox-jury-col -right'>
                                          <div className='tpa-splitbox-jury-list'>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/1.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/2.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/3.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/4.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/5.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/6.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div className='tpa-splitbox-jury-item -offsettop'></div>
                                              <div className='tpa-splitbox-jury-item -offset'></div>
                                              <div className='tpa-splitbox-jury-item -offset'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/7.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/8.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/9.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div style={{backgroundImage: `url(${require('../../assets/img/jury/10.png')})`}} className='tpa-splitbox-jury-item'></div>
                                              <div className='tpa-splitbox-jury-item -action'>
                                                  <Link to='/winners' className='tpa-splitbox-jury-action'>
                                                      <div className='tpa-splitbox-jury-action-text'>
                                                          <span>View more</span>
                                                          <i className='tpa-icon -chevron-right' />
                                                      </div>
                                                  </ Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
        )
    }
}


export default LandingStatic;
