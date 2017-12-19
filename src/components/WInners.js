import React, {Component} from 'react';

import ProjectPreview from 'src/components/ProjectPreview';
import Paginator from 'src/components/includes/Paginator';

import {paginate} from 'src/services/paginateService';

class Winners extends Component {
    constructor() {
        super();

        this.state = {
            winners: null
        }

        this.winnersLimit = 8;

        this.handlePaginate = this.handlePaginate.bind(this);
    }

    handlePaginate(page) {
        paginate(page, 'listWinners', this.winnersLimit)
            .then(response => this.setState({ winners: response.result.items }));
    }

    componentWillMount() {
        paginate(0, 'listWinners', this.winnersLimit)
            .then(response => this.setState({ winners: response.result.items }));
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
                      
                      <Paginator paginate={this.handlePaginate} />
                    </div>
                  </div>
                </div>
            </section>
        )
    }
}

export default Winners;
