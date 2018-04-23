import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import AddTodo from '../components/AddTodo';

const mapStateToProps = state => {
    return !state.searchInput ?
        ({ show: true }) :
        ({ show: false})
}

const mapDispatchToProps = dispatch => 
    ({
        addTodo: inputValue => dispatch(addTodo(inputValue))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTodo)