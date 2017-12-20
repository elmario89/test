import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Paginator extends Component {
    constructor() {
        super();

        this.state = {
            pages: null,
            shrinked: null
        }
    }

    componentDidMount() {
        const page = 2;
        const pagesCounter = Array(Math.ceil(this.props.totalCount / this.props.limit))
            .fill()
            .map((e, i) => i + 1);

        this.filterPages(pagesCounter, page);
    }

    handlePaginateClick(e, page) {
        e.preventDefault();
        this.props.paginate(page);
    }

    filterPages(array, n) {
        if (array.length <= 10) {

            this.setState({ shrinked: true, pages: array});
        }

        const offset = 4;
        let left = Math.max(n - offset, 0);
        let right = Math.min(n + offset - 1, array.length - 1);

        if (n < offset) {
            right = 2 * offset + 1;
        }

        if (n > array.length - offset) {
            left = array.length - 2 * offset;
        }

        this.setState({ shrinked: false, pages: array.slice(left, right)});
    }

    render() {
        const pagesArray = this.state.pages;
        return (
          <div className='tpa-lastbox-paginator'>
            <div className='tpa-paginator'>
              <a href='#' className='tpa-paginator-item -prev'>
                <i className='tpa-icon -chevron-left'></i>
              </a>

              {pagesArray ? pagesArray.map(page => <a key={page} className='tpa-paginator-item' onClick={(e) => this.handlePaginateClick(e, page)}>{page}</a>) : null}

              <a href='#' className='tpa-paginator-item -next'>
                <i className='tpa-icon -chevron-right'></i>
              </a>
            </div>
          </div>
        )
    }
}

Paginator.propTypes = {
    totalCount: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    paginate: PropTypes.func.isRequired
};

export default Paginator;
