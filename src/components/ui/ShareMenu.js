import React, {Component} from 'react';

class ShareMenu extends Component {
    render() {
        return (
          <nav ng-class='{open: $ctrl.open}' className='tpa-tabbar tpa-tabbar-share'>
            <div className='tpa-tabbar-container'>
              <div className='tpa-tabbar-inner'>
                <div className='tpa-tabbar-right'>
                  <div ng-click='$ctrl.open = false' className='tpa-tabbar-backdrop' />
                  <div className='tpa-tabbar-menu'>
                    <div className='tpa-tabbar-menu-container'>
                      <div ng-if='!$ctrl.shrinked' className='tpa-tabbar-menu-item'>
                        <button ngclipboard='ngclipboard' data-clipboard-text='{{::$ctrl.url}}' ngclipboard-success='$ctrl.open = false' className='tpa-btn_primary -full -left'><i className='tpa-icon -copy' /><span>Copy link</span></button>
                      </div>
                      <div className='tpa-tabbar-menu-item'>
                        <button ng-click='$ctrl.shareFb()' className='tpa-btn_primary -full -left'><i className='tpa-icon -facebook' /><span>Facebook</span></button>
                      </div>
                      <div className='tpa-tabbar-menu-item'><a ng-href='{{$ctrl.getTweetIntent()}}' className='tpa-btn_primary -full -left -link-button'><i className='tpa-icon -twitter' /><span>Twitter</span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
      );
    }
}

export default ShareMenu;
