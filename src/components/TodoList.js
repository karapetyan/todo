import React from 'react';

const ShowTodoList = ({toggleTodo, todos, searchInput, filter}) => {
    let todoList = [...todos];

    if (searchInput) {
        todoList = todoList.filter(todo =>
            todo.text.toLowerCase().includes(searchInput.toLowerCase())
        )
        return renderTodoList(todoList, toggleTodo);
    } else {
        switch (filter) {
            case 'SHOW_COMPLETED': 
                todoList = todoList.filter(todo =>
                    todo.completed
                )
                return renderTodoList(todoList, toggleTodo);
            case 'SHOW_ACTIVE':
                todoList = todoList.filter(todo =>
                    !todo.completed
                )
                return renderTodoList(todoList, toggleTodo);
            default:
                return renderTodoList(todoList, toggleTodo);
        }            
    }
}

const renderTodoList = (todoList, toggleTodo) => {
    return todoList.map(todo =>
        <div key={todo.id}>
            <label>
                <input type="checkbox" onClick={() => toggleTodo(todo.id)} checked={todo.completed} /> 
                { todo.text }
            </label>
        </div>
    )
}

export default ShowTodoList;
