import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';
import Paginator from 'src/components/Shared/Paginator';

import {paginate} from 'src/services/paginateService';

class Winners extends Component {
    constructor() {
        super();

        this.state = {
            winners: null,
            totalCount: null
        }

        this.winnersLimit = 8;
    }

    componentWillReceiveProps(newProps) {
        const page = parseFloat(newProps.match.params.page) - 1;

        paginate(page, 'listWinners', this.winnersLimit)
            .then(response => {
                this.setState({ winners: response.result.items, totalCount: response.result.totalCount });
                window.scrollTo(0, 0);
            })
    }

    componentWillMount() {
        const page = this.props.match.params.page - 1;

        paginate(page, 'listWinners', this.winnersLimit)
            .then(response => {
                this.setState({ winners: response.result.items, totalCount: response.result.totalCount });
            });
    }

    render() {
        return (
            <section className='tpa-lastbox'>
                <div className='tpa-lastbox-body'>
                  <div className='tpa-lastbox-wrap -equal'>
                    <div className='tpa-lastbox-container'>
                      <div className='tpa-lastbox-items -grid'>
                        {this.state.winners ? this.state.winners.map(winner => <ProjectPreview videoPadded={true} key={winner._id} extended={true} project={winner} />) : null}
                      </div>

                      {
                        this.state.totalCount ? 
                        <Paginator
                          totalCount={this.state.totalCount}
                          limit={this.winnersLimit}
                          route='/winners/'
                          page={parseFloat(this.props.match.params.page)}
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

export default Winners;
