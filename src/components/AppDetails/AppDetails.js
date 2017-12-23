import React, {Component} from 'react';
import {sendApiRequest} from 'src/services/apiService';

import IntroAppDetails from 'src/components/AppDetails/IntroAppDetails';

class AppDetails extends Component {
    constructor() {
        super();

        this.state = {
            app: null,
            latestNominees: null
        }
    }
    componentWillMount() {
        const id = this.props.match.params.id;

        sendApiRequest('getApp', {
            params: {id}
        })
            .then(response => this.setState({ app: response.result }));

        sendApiRequest('listNominees', {
            query: {
                limit: 4
            }
        })
            .then(response => this.setState({ latestNominees: response.result.items }));
    }

    render() {
        return (
          <div>
            {
                this.state.app && this.state.latestNominees ? 
                <IntroAppDetails app={this.state.app} nominees={this.state.latestNominees} />
                : null
            }
          </div>
        )
    }
}

export default AppDetails;
