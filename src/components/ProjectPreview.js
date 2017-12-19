import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ProjectPreview extends Component {
    render() {
      const project = this.props.project;

      return (
        <div className='tpa-lastbox-items-item'>
          <div>
          <div style={{backgroundColor: project.screensBgColor}} className='tpa-lastbox-items-item-screen'>
            <div className='tpa-lastbox-items-item-screen-inner'>
              {/*<like-button project='project' button-class='tpa-lastbox-items-item-screen-like' /><a ng-click='$ctrl.shareOpen[$index] = true' className='tpa-lastbox-items-item-screen-project'><i className='tpa-icon -share' /></a>*/}
              <share-menu url='project.storeUrl' open='$ctrl.shareOpen[$index]' type='common' permalink='project.permalink' name='project.name' />
                <a ui-sref='project.projectDetails({id: project.permalink})' className='tpa-lastbox-items-item-body-title'>
                <div ng-if='!project.video' screenshot='project.screens[0].url' size='296x525' className='tpa-lastbox-items-item-screen-img' />
                <div ng-if='project.video' className='tpa-lastbox-items-item-screen-img'>
                  <video-player video='project.video' slide='project.slide' preload='true' />
                </div></a>
            </div>
          </div>
          <div className='tpa-lastbox-items-item-body'>
            <div className='tpa-lastbox-items-item-body-inner'>
              <div className='tpa-lastbox-items-item-body-col'>
                <i className={project.platform === 'ios' ? '-apple tpa-icon' : '-google-play tpa-icon'} />
              </div>
              <div className='tpa-lastbox-items-item-body-col'><a ui-sref='project.appDetails({id: project.permalink})' className='tpa-lastbox-items-item-body-title'>{project.name}</a>
                <div className='tpa-lastbox-items-item-body-author'>by <a ng-href='{::project.developer.url}' target='_blank'>{project.developer.name} </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
}

ProjectPreview.propTypes = {
    project: PropTypes.object.isRequired
};

export default ProjectPreview;
