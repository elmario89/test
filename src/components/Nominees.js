import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';
import Paginator from 'src/components/Shared/Paginator';

import {paginate} from 'src/services/paginateService';

class Nominees extends Component {
    constructor() {
        super();

        this.state = {
            nominees: null
        }

        this.nomineesLimit = 8;

        this.handlePaginate = this.handlePaginate.bind(this);
    }

    handlePaginate(page) {
        paginate(page, 'listNominees', this.nomineesLimit)
            .then(response => this.setState({ nominees: response.result.items }));
    }

    componentWillMount() {
        paginate(0, 'listNominees', this.nomineesLimit)
            .then(response => this.setState({ nominees: response.result.items }));
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

                      <Paginator paginate={this.handlePaginate} />
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Nominees;
