import React, {Component} from 'react';

import {sendApiRequest} from 'src/services/apiService';

import Intro from 'src/components/Landing/Intro';
import LandingStatic from 'src/components/Landing/LandingStatic';
import LatestNominees from 'src/components/Landing/LatestNominees';

class Landing extends Component {
    constructor() {
        super();
        this.state = {
            winner: null,
            latestNominees: null
        }
    }

    renderLanding() {
        return (
            <div>
                <Intro winner={this.state.winner[0]} />
                <LatestNominees nominees={this.state.latestNominees} />
                <LandingStatic />
            </div>
        )
    }

    componentWillMount() {
        sendApiRequest('listWinners', {
            query: {
                limit: 1
            }
        }).then(response => this.setState({ winner: response.result.items }));

        sendApiRequest('listNominees', {
            query: {
                limit: 4
            }
        }).then(response => this.setState({ latestNominees: response.result.items }));
    }

    render() {
        return (
            <div>
                {this.state.winner && this.state.latestNominees ? this.renderLanding() : null}
            </div>
        )
    }
}

export default Landing;
