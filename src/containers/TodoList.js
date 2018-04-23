import { connect } from 'react-redux';
import { toggleTodo } from '../actions/index';
import ShowTodoList from '../components/TodoList';

const mapStateToProps = state => 
    ({
        searchInput: state.searchInput,
        todos: state.todos,
        filter: state.filter
    })

const mapDispatchToProps = dispatch => 
    ({
        toggleTodo: id => dispatch(toggleTodo(id))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowTodoList)