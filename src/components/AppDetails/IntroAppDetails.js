import React, {Component} from 'react';
import PropTypes from 'prop-types';

class IntroAppDetails extends Component {
    constructor() {
        super();
    }

    renderDetails(app) {
        console.log('render', app);
    }

    render() {
        return (
          <div>
            {
                this.props.app ?
                this.renderDetails(this.props.app)
                : null
            }
          </div>
        )
    }
}

IntroAppDetails.propTypes = {
    app: PropTypes.object.isRequired
};

export default IntroAppDetails;
