import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {splitParagraphs} from 'src/helpers';

import IntroRating from 'src/components/IntroRating';
import OwlCarouselWrapper from 'src/components/OwlCarouselWrapper';
import LatestNominees from 'src/components/Landing/LatestNominees';

class Splitbox extends Component {
    renderParagraphs(desc) {
        return (
            <div className='tpa-splitbox-description'>
                {splitParagraphs(desc).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
        )
    }

    render() {
        const project = this.props;
        return (
            <div>
                <div className='tpa-splitbox -lg'>
                    <div style={{backgroundColor: project.screensBgColor}} className='tpa-splitbox-fill'></div>
                    <div className='tpa-splitbox-inner'>
                        {this.renderParagraphs(project.desc)}

                        {this.props.rates ? <IntroRating rates={project.rates} internal={true} /> : null}

                        <div className='tpa-splitbox-slider'>
                            <OwlCarouselWrapper video={this.props.video} size='296x525' screens={this.props.screens} appDetails='appDetails' />
                        </div>
                    </div>
                </div>
                <LatestNominees nominees={this.props.nominees} internal={true} />
            </div>
        )
    }
}

Splitbox.propTypes = {
    video: PropTypes.object,
    desc: PropTypes.string.isRequired,
    rates: PropTypes.object,
    screens: PropTypes.array.isRequired,
    screensBgColor: PropTypes.string.isRequired,
    nominees: PropTypes.array.isRequired
};

export default Splitbox;
