import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import ShareMenu from 'src/components/ui/ShareMenu';
import Video from 'src/components/ui/Video';
import OwlCarouselWrapper from 'src/components/OwlCarouselWrapper';

import {formatDate} from 'src/helpers';

class ProjectPreview extends Component {
    renderVideo(video) {
      return(
        <Video video={video} padded={this.props.videoPadded} />
      )
    }

    renderCarousel(project) {
      return <OwlCarouselWrapper screens={project.screens} size='296x525' />
    }

    render() {
      const project = this.props.project;

      return (
        <div className='tpa-lastbox-items-item'>
          <div>
          <div style={{backgroundColor: project.screensBgColor}} className='tpa-lastbox-items-item-screen'>
            <Link to={`/appDetails/${project._id}`} className='tpa-lastbox-items-item-screen-link'></Link>
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
              <Link to={`/appDetails/${project._id}`} className='tpa-lastbox-items-item-body-title'>
                {project.video ? this.renderVideo(project.video) : this.renderCarousel(project)}
              </Link>
            </div>
          </div>
          <div className='tpa-lastbox-items-item-body'>
            <div className='tpa-lastbox-items-item-body-inner'>
              <div className='tpa-lastbox-items-item-body-col'>
                <i className={project.platform === 'ios' ? '-apple tpa-icon' : '-google-play tpa-icon'} />
              </div>
              <div className='tpa-lastbox-items-item-body-col'>
                <Link to={`/appDetails/${project._id}`} className='tpa-lastbox-items-item-body-title'>{project.name}</Link>
                <div className='tpa-lastbox-items-item-body-author'>by&nbsp;
                  <a href={project.developer.url} target='_blank'>{project.developer.name}</a>
                </div>
              </div>
              {
                this.props.extended ? 
                <div className='tpa-lastbox-items-item-body-row -indent'>
                  <div className='tpa-lastbox-items-item-body-col -middle'></div>
                  <div className='tpa-lastbox-items-item-body-col -middle'>
                    <div className='tpa-lastbox-items-item-body-date'>
                      {formatDate(project.winDate)}
                      <span>AOTD</span>
                    </div>
                  </div>
                  <div className='tpa-lastbox-items-item-body-col -middle -right'>
                    <div className='tpa-lastbox-items-item-body-more'>
                      <Link to={`/appDetails/${project._id}`}>
                        <span>See case</span>
                        <i className='tpa-icon -chevron-right' />
                      </Link>
                    </div>
                  </div>
                </div>
                : null
              }
            </div>
          </div>
        </div>
        </div>
      );
    }
}

ProjectPreview.propTypes = {
    project: PropTypes.object.isRequired,
    extended: PropTypes.bool,
    videoPadded: PropTypes.bool
};

export default ProjectPreview;
