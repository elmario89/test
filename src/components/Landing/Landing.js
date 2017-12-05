import React, {Component} from 'react';
import Intro from 'src/components/Landing/Intro';

import ApiService from 'src/services/ApiService';

class Landing extends Component {
    constructor() {
        super();
        this.state = {winner: null}
    }

    componentWillMount(p) {
        const service = new ApiService();
        service.send('listWinners', {
            query: {
                limit: 1
            }
        }).then(response => this.setState({ winner: response.result.items }));
    }

    render() {
        return (
            <div>
                {this.state.winner ? <Intro winner={this.state.winner[0]} /> : ''}
            </div>
        )
    }
}

export default Landing;
