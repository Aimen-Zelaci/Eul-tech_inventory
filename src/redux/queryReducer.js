const queryReducer = (state='',action)=>{
    switch(action.type) {
        case 'SET QUERY':
            return action.query
        default:
            return state
    }
}

export default queryReducer;
