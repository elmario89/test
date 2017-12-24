import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {withRouter} from 'react-router'

class Navbar extends Component {
    constructor() {
        super();

        this.checkActive = this.checkActive.bind(this);
    }

    checkActive(location) {
        return location.split('/')[1] === this.props.location.pathname.split('/')[1] ? 'tpa-navbar-nav-menu-item -active' : 'tpa-navbar-nav-menu-item';
    }

    render() {
        return (
            <nav className='tpa-navbar'>
              <div className='tpa-navbar-inner'>
                <div className='tpa-navbar-left'>
                    <Link to='/' className='tpa-navbar-logo' >Tappawards</Link>
                </div>
                <div className='tpa-navbar-right'>
                  <div className='tpa-navbar-nav'>
                    <div className='tpa-navbar-nav-menu'>
                        <Link to='/' className='tpa-navbar-logo tpa-navbar-nav-menu-item'>
                            <span className='tpa-navbar-nav-menu-item-icon -danger'>
                                <i className='tpa-icon -saturn' />
                            </span>
                            <span>AOTM<b> Aug '17</b></span>
                        </Link>

                        <Link to='/winners/1' className={this.checkActive('/winners')}>
                            Winners
                        </Link>

                        <Link to='/nominees/1' className={this.checkActive('/nominees')}>
                            Nominees
                        </Link>

                        <Link to='/jury' className={this.checkActive('/jury')}>
                            Jury
                        </Link>

                        <Link to='/' className='tpa-navbar-nav-menu-item'>
                            Log in
                        </Link>

                        <button className='tpa-btn_primary -nav'>
                            <span>Submit the app</span>
                            <i className='tpa-icon -chevron-right'></i>
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        )
    }
}

export default withRouter(Navbar);
