import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Paginator extends Component {
    constructor() {
        super();

        this.state = {
            pages: null,
            shrinked: null,
            page: null
        }
    }

    componentWillReceiveProps() {
      const page = this.props.page;
      const pagesCounter = Array(Math.ceil(this.props.totalCount / this.props.limit))
          .fill()
          .map((e, i) => i + 1);

      this.filterPages(pagesCounter, page);
    }

    componentDidMount() {
        const page = this.props.page;
        const pagesCounter = Array(Math.ceil(this.props.totalCount / this.props.limit))
            .fill()
            .map((e, i) => i + 1);

        this.filterPages(pagesCounter, page);
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

        this.setState({ shrinked: false, pages: array.slice(left, right), page: n});
    }

    render() {
        const pagesArray = this.state.pages;
        const page = this.props.page;
        const maxPage = this.props.totalCount / this.props.limit;
        const route = this.props.route;

        return (
          <div className='tpa-lastbox-paginator'>
            {
              pagesArray ?
              <div className='tpa-paginator'>
              <Link to={`${route}${page - 1}`} className='tpa-paginator-item -prev'>
                <i className='tpa-icon -chevron-left'></i>
              </Link>

              {
                page >= 5 && !this.state.shrinked ?
                <Link to={`${route}1`} className='tpa-paginator-item'>1</Link>
                : null
              }

              {
                page > 5 && !this.state.shrinked ?
                <span className='tpa-paginator-item -dots'>...</span>
                : null
              }

              {
                pagesArray ? 
                pagesArray.map(page => {
                    return <Link to={`${route}${page}`} key={page} className={this.props.page === page ? 'tpa-paginator-item -active' : 'tpa-paginator-item'}>{page}</Link>;
                }) 
                : null
              }

              {
                page >= Math.ceil(maxPage - 4) && !this.state.shrinked ?
                null
                : <span className='tpa-paginator-item -dots'>...</span>
              }

              {
                  !this.state.shrinked ?
                  <Link className={this.props.page === Math.ceil(maxPage) ? 'tpa-paginator-item -active' : 'tpa-paginator-item'} to={`${route}${Math.ceil(maxPage)}`}>{Math.ceil(maxPage)}</Link>
                  : null
              }

              <Link to={`${route}${page + 1}`} className='tpa-paginator-item -next'>
                <i className='tpa-icon -chevron-right'></i>
              </Link>
            </div>
              : null
            }
          </div>
        )
    }
}

Paginator.propTypes = {
    totalCount: PropTypes.number.isRequired,
    limit: PropTypes.number.isRequired,
    route: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired
};

export default Paginator;
