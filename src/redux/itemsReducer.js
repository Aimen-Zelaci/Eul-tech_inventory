const itemReducer = (state='',action)=>{
    switch(action.type) {
        case 'TOGGLE':
            return true
        default:
            return false
    }
}

export default itemReducer;
