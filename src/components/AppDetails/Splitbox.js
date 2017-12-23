import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {splitParagraphs} from 'src/helpers';

import IntroRating from 'src/components/IntroRating';

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
          <div className="tpa-splitbox -lg">
            <div style={{backgroundColor: project.screensBgColor}} className="tpa-splitbox-fill"></div>
            <div className="tpa-splitbox-inner">
                {this.renderParagraphs(project.desc)}

                <IntroRating rates={project.rates} internal={true} />
            </div>
          </div>
        )
    }
}

Splitbox.propTypes = {
    desc: PropTypes.string.isRequired,
    rates: PropTypes.object.isRequired,
    screens: PropTypes.array.isRequired,
    screensBgColor: PropTypes.string.isRequired
};

export default Splitbox;
