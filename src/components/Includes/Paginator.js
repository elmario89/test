import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Paginator extends Component {
    handlePaginateClick(e, page) {
      e.preventDefault();
      this.props.paginate(page);
    }

    render() {
        return (
          <div className='tpa-lastbox-paginator'>
            <div className='tpa-paginator'>
              <a href='#' className='tpa-paginator-item -prev'>
                <i className='tpa-icon -chevron-left'></i>
              </a>

              <a href='/' className='tpa-paginator-item' onClick={(e) => this.handlePaginateClick(e, 0)}>1</a>
              <a href='/' className='tpa-paginator-item' onClick={(e) => this.handlePaginateClick(e, 1)}>2</a>
              <a href='/' className='tpa-paginator-item' onClick={(e) => this.handlePaginateClick(e, 2)}>3</a>

              <a href='#' className='tpa-paginator-item -next'>
                <i className='tpa-icon -chevron-right'></i>
              </a>
            </div>
          </div>
        )
    }
}

Paginator.propTypes = {
    paginate: PropTypes.func.isRequired
};

export default Paginator;
