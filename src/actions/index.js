let nextTodoId = 0;

export const addTodo = text =>
    ({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed: false
    })

export const toggleTodo = id => 
    ({
        type: 'TOGGLE_TODO',
        id
    })

export const setFilter = filter =>
    ({
        type: 'SET_FILTER',
        filter
    })

export const searchInput = searchInput => 
    ({
        type: 'SET_SEARCH_INPUT',
        searchInput
    })

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}