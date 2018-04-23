const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {...action}
            ]
        case 'TOGGLE_TODO':
            return state.map((todo, index) =>
                index === action.id ?
                    {
                        ...todo,
                        completed: !todo.completed
                    } :
                    todo
            )
        default:
            return state    
    }
}

export default todos;