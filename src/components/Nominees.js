import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';
import Paginator from 'src/components/includes/Paginator';

import {sendApiRequest} from 'src/services/ApiService';

class Nominees extends Component {
    constructor() {
        super();

        this.state = {
            nominees: null
        }

        this.nomineesLimit = 8;

        this.paginate = this.paginate.bind(this);
    }

    paginate(page) {
        sendApiRequest('listNominees', {
            query: {
                limit: 8,
                skip: page * this.nomineesLimit
            }
        }).then(response => this.setState({ nominees: response.result.items }));
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

                      <Paginator paginate={this.paginate} />
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Nominees;
