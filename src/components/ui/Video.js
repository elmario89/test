import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Video extends Component {
    constructor() {
        super();
        this.state = {videoIsLoaded: false}
    }

    componentDidMount() {
        if (this.refs.videoFile) {
            const video = this.refs.videoFile;

            video.oncanplay = function() {
                this.setState({videoIsLoaded: true});
                video.play();
            }.bind(this);
        }
    }

    render() {
        const video = this.props.video;
        return (
          <div>
            <video ref='videoFile' loop muted className='tpa-carousel-item-video'>
                <source src={video.url} type='video/mp4' />
                Your browser doesn't support the video tag
            </video>
            {!this.state.videoIsLoaded ? <div className='tpa-loader'><span /></div> : null}
        </div>
      );
    }
}

Video.propTypes = {
    video: PropTypes.object.isRequired
};

export default Video;
