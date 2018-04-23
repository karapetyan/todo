import React from 'react';

const AddTodo = ({addTodo, show}) => {
    let todoInput;
    return show ? 
        (
            <div>
                <input ref={ inputText => todoInput = inputText } type="text" placeholder="todo..."/>
                <button type="button" onClick={ () => addTodo(todoInput.value) }>Add</button>
            </div>
        ) :
        null
}

export default AddTodo;