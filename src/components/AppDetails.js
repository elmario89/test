import React, {Component} from 'react';
import {sendApiRequest} from 'src/services/apiService';

class AppDetails extends Component {
    componentWillMount() {
        const id = this.props.match.params.id;

        sendApiRequest('getApp', {
            params: {id: id}
        })
            .then(response => console.log(response));
            // .then(response => this.setState({ winner: response.result.items }));
    }

    render() {
        return (
          <div>
            
          </div>
        )
    }
}

export default AppDetails;
