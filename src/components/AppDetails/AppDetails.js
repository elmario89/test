import React, {Component} from 'react';
import {sendApiRequest} from 'src/services/apiService';

import IntroAppDetails from 'src/components/AppDetails/IntroAppDetails';

class AppDetails extends Component {
    constructor() {
        super();

        this.state = {
            app: null
        }
    }
    componentWillMount() {
        const id = this.props.match.params.id;

        sendApiRequest('getApp', {
            params: {id}
        })
            .then(response => {
                console.log(response.result);
                return response;
            })
            .then(response => this.setState({ app: response.result }));
    }

    render() {
        return (
          <div>
            {
                this.state.app ? 
                <IntroAppDetails app={this.state.app} />
                : null
            }
          </div>
        )
    }
}

export default AppDetails;
