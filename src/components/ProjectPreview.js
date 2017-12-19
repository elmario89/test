import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';

import ShareMenu from 'src/components/ui/ShareMenu';
import Video from 'src/components/ui/Video';
import OwlCarouselWrapper from 'src/components/OwlCarouselWrapper';

class ProjectPreview extends Component {
    renderVideo(video) {
      return(
        <Video video={video} />
      )
    }

    renderCarousel(project) {
      return <OwlCarouselWrapper screens={project.screens} size='296x525' />
    }

    render() {
      const project = this.props.project;
      console.log(project);

      return (
        <div className='tpa-lastbox-items-item'>
          <div>
          <div style={{backgroundColor: project.screensBgColor}} className='tpa-lastbox-items-item-screen'>
            <div className='tpa-lastbox-items-item-screen-inner'>
              <ShareMenu />
              {/*<share-menu url='project.storeUrl' open='$ctrl.shareOpen[$index]' type='common' permalink='project.permalink' name='project.name' />*/}
              <a className='tpa-lastbox-items-item-screen-like'>
                <i className={project.likeCount === 0 ? 'tpa-icon -heart' : 'tpa-icon -heart-filled'}/>
                <span>{project.likeCount}</span>
              </a>
              <a className='tpa-lastbox-items-item-screen-app'>
                <i className='tpa-icon -share'></i>
              </a>
              <a ui-sref='project.projectDetails({id: project.permalink})' className='tpa-lastbox-items-item-body-title'>
                <div ng-if='project.video' className='tpa-lastbox-items-item-screen-img'></div>
                {project.video ? this.renderVideo(project.video) : this.renderCarousel(project)}
                {/*<div ng-if='!project.video' screenshot='project.screens[0].url' size='296x525' className='tpa-lastbox-items-item-screen-img' />
                <div ng-if='project.video' className='tpa-lastbox-items-item-screen-img'></div>*/}
              </a>
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
