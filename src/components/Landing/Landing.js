import React, {Component} from 'react';
import Intro from 'src/components/Landing/Intro';

import ApiService from 'src/services/ApiService';

class Landing extends Component {
    componentDidMount() {
        const service = new ApiService();
        const winners = service.send('listWinners', {
            query: {
                limit: 1
            }
        });

        console.log(winners);
    }

    render() {
        return (
          <Intro />
        )
    }
}

export default Landing;
