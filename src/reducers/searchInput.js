const searchInput = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_INPUT':
            return action.searchInput
        default:
            return state
    }
}

export default searchInput;