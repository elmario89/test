import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';

import {sendApiRequest} from 'src/services/ApiService';

class Nominees extends Component {
    constructor() {
        super();
        this.state = {
            nominees: null
        }
    }

    componentWillMount() {
        sendApiRequest('listNominees', {
            query: {
                limit: 8
            }
        }).then(response => this.setState({ nominees: response.result.items }));
    }

    render() {
        return (
            <section className='tpa-lastbox'>
                <div className='tpa-lastbox-body'>
                  <div className='tpa-lastbox-wrap -equal'>
                    <div className='tpa-lastbox-container'>
                      <div className='tpa-lastbox-items -grid'>
                        {this.state.nominees ? this.state.nominees.map(noninee => <ProjectPreview key={noninee._id}  project={noninee} />) : null}
                      </div>
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Nominees;
