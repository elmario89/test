import React, {Component} from 'react';
// import {Link} from 'react-router';

class Navbar extends Component {
    render() {
        return (
            <nav className='tpa-navbar'>
              <div className='tpa-navbar-inner'>
                <div className='tpa-navbar-left'>
                    <a to='/' className='tpa-navbar-logo' >Tappawards</a>
                </div>
                <div className='tpa-navbar-right'>
                  <div className='tpa-navbar-nav'>
                    <div className='tpa-navbar-nav-menu'>
                        <a to='/' className='tpa-navbar-logo tpa-navbar-nav-menu-item'>
                            <span className='tpa-navbar-nav-menu-item-icon -danger'>
                                saturn
                            </span>
                            <span>AOTM<b> Aug '17</b></span>
                        </a>

                        <a to='/' className='tpa-navbar-nav-menu-item'>
                            Winners
                        </a>

                        <a to='/' className='tpa-navbar-nav-menu-item'>
                            Nominees
                        </a>

                        <a to='/' className='tpa-navbar-nav-menu-item'>
                            Jury
                        </a>

                        <a to='/' className='tpa-navbar-nav-menu-item'>
                            Log in
                        </a>

                        <button className='tpa-btn_primary -nav'>
                            <span>Submit the app</span>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        )
    }
}

export default Navbar;