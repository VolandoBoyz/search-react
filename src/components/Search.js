import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      pristine: true,
    };
  }
  handleChange(event) {
    this.setState({ term: event.target.value, pristine: event.target.value === '' }, () => {
      this.props.getTerm(this.state.term);
    }
    );
  }
  handleCancel() {
    this.setState({ term: '', pristine: true }, () => {
      this.props.getTerm(this.state.term);
    }
    );
  }
  render() {
    return (
      <div className={`${this.props.className} search-bar ${this.state.pristine ? 'pristine' : ''}`}>
        <input
          className='search-input'
          placeholder='Search...'
          onChange={e => this.handleChange(e)}
          value={this.state.term}
        />
        <button type='button' onClick={() => this.handleCancel()}>
          Cancel
        </button>
      </div>
    );
  }
}

export const SearchStyled = styled(Search)`
  &&.search-bar{
  position: relative;
  height: 40px;
    display: flex;
    .search-input{
      transition: all 0.2s ease-in-out;
      width: 80%;
    }
    input{
      border: none;
      border-bottom: 1px black solid;
        &:focus{
        outline: none;
      }
    }
    button{
      transition: all 0.2s ease-in;
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
      position: absolute;
      right: 8px;
      top: 8px;
      visibility: visible;
      border: none;
      background: none;
      color: blue;
      &:focus{
        outline: none;
      }
      cursor: pointer;
    }
  }
    &&.pristine {
      .search-input{
      width: 100%;
      }
      button{
        transition: none;
        -webkit-transition-delay: none;
        transition-delay: none;
        visibility: hidden;
      }
    }
`;

Search.propTypes = {
  getTerm: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default SearchStyled;

