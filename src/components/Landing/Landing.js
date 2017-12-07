import React, {Component} from 'react';

import {sendApiRequest} from 'src/services/ApiService';

import Intro from 'src/components/Landing/Intro';
import LandingStatic from 'src/components/Landing/LandingStatic';

class Landing extends Component {
    constructor() {
        super();
        this.state = {winner: null}
    }

    componentWillMount() {
        sendApiRequest('listWinners', {
            query: {
                limit: 1
            }
        }).then(response => this.setState({ winner: response.result.items }));
    }

    render() {
        return (
            <div>
                {this.state.winner ? <Intro winner={this.state.winner[0]} /> : null}
                {this.state.winner ? <LandingStatic /> : null}
            </div>
        )
    }
}

export default Landing;
