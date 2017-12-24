import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';
import Paginator from 'src/components/Shared/Paginator';

import {paginate} from 'src/services/paginateService';

class Nominees extends Component {
    constructor() {
        super();

        this.state = {
            nominees: null,
            totalCount: null
        }

        this.nomineesLimit = 8;
    }

    componentWillReceiveProps(newProps) {
        const page = parseFloat(newProps.match.params.page) - 1;

        paginate(page, 'listNominees', this.nomineesLimit)
            .then(response => {
              this.setState({ nominees: response.result.items, totalCount: response.result.totalCount });
              window.scrollTo(0, 0);
            })
    }

    componentWillMount() {
        const page = this.props.match.params.page - 1;

        paginate(page, 'listNominees', this.nomineesLimit)
            .then(response => this.setState({ nominees: response.result.items, totalCount: response.result.totalCount }));
    }

    render() {
        return (
            <section className='tpa-lastbox'>
                <div className='tpa-lastbox-body'>
                  <div className='tpa-lastbox-wrap -equal'>
                    <div className='tpa-lastbox-container'>
                      <div className='tpa-lastbox-items -grid'>
                        {this.state.nominees ? this.state.nominees.map(noninee => <ProjectPreview videoPadded={true} key={noninee._id}  project={noninee} />) : null}
                      </div>

                        {
                            this.state.totalCount ? 
                            <Paginator
                                totalCount={this.state.totalCount}
                                limit={this.nomineesLimit}
                                route='/nominees/'
                            /> 
                            : null
                        }
                      
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Nominees;
