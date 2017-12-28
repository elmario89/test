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
        return (
          <div className='tpa-lastbox-paginator'>
            {
              pagesArray ?
              <div className='tpa-paginator'>
              <Link to={`${this.props.route}${page - 1}`} className='tpa-paginator-item -prev'>
                <i className='tpa-icon -chevron-left'></i>
              </Link>

              {
                page >= 5 && !this.state.shrinked ?
                <Link to={`${this.props.route}1`} className='tpa-paginator-item'>1</Link>
                : null
              }

              <span>{pagesArray}</span>

              {
                page > 5 && !this.state.shrinked ?
                <span className='tpa-paginator-item -dots'>...</span>
                : null
              }

              {
                pagesArray ? 
                pagesArray.map(page => {
                    return <Link to={`${this.props.route}${page}`} key={page} className='tpa-paginator-item'>{page}</Link>;
                }) 
                : null
              }

              {
                page >= pagesArray.length - 4 && this.state.shrinked ?
                null
                : <span className='tpa-paginator-item -dots'>...</span>
              }

              {
                  !this.state.shrinked ?
                  <Link className='tpa-paginator-item' to={`${this.props.route}${pagesArray.length}`}>{Math.ceil(this.props.totalCount/this.props.limit)}</Link>
                  : null
              }

              <Link to={`${this.props.route}${page + 1}`} className='tpa-paginator-item -next'>
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
