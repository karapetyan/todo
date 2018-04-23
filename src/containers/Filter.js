import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions/index';

const Filter = ({filter, setFilter, searchInput}) =>
    !searchInput ?
        (<div>
            <span>Show: </span>
            <button onClick={() => setFilter('SHOW_ALL')} disabled={ filter === 'SHOW_ALL' ? true : false }>Show all</button>
            <button onClick={() => setFilter('SHOW_COMPLETED')} disabled={ filter === 'SHOW_COMPLETED' ? true : false }>Show completed</button>
            <button onClick={() => setFilter('SHOW_ACTIVE')} disabled={ filter === 'SHOW_ACTIVE' ? true : false }>Show active</button>
        </div>):
        null

const mapStateToProps = state =>
    ({
        filter: state.filter,
        searchInput: state.searchInput
    })

const mapDispatchToProps = dispatch =>
    ({
        setFilter: filter => dispatch(setFilter(filter))
    })    

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter)