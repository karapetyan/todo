import React from 'react';
import { connect } from 'react-redux';
import { searchInput } from '../actions/index';

const Search = ({searchInput}) => {
    let input;
    return (
        <input ref={input_field => input = input_field } onChange={() => searchInput(input.value)} placeholder="search" /> 
    )
}

const mapDispatchToProps = dispatch => ({
    searchInput: input => dispatch(searchInput(input))
})

export default connect(
    null,
    mapDispatchToProps
)(Search);