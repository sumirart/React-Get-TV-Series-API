const numbers = (state = 0, action) => {
    switch (action.type){ 
        case "TAMBAH":
            return state + action.payload
        case "KURANG":
            return state - action.payload
        default:
            return state
    }
}

export default numbers