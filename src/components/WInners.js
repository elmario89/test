import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';

import {sendApiRequest} from 'src/services/ApiService';

class Winners extends Component {
    constructor() {
        super();
        this.state = {
            winners: null
        }
    }

    componentWillMount() {
        sendApiRequest('listWinners', {
            query: {
                limit: 8
            }
        }).then(response => this.setState({ winners: response.result.items }));
    }

    render() {
        return (
            <section className='tpa-lastbox'>
                <div className='tpa-lastbox-body'>
                  <div className='tpa-lastbox-wrap -equal'>
                    <div className='tpa-lastbox-container'>
                      <div className='tpa-lastbox-items -grid'>
                        {this.state.winners ? this.state.winners.map(winner => <ProjectPreview key={winner._id}  project={winner} />) : null}
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Winners;
