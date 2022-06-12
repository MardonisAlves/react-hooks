 
 function numberReducer(state , action){
    switch (action.type) {
        case 'add2':
            return {...state, number:state.number + 2}
        default:
            return state;
    }
}

 function userReducer(state , action){
    switch (action.type) {
        case 'login':
            return {...state, user:{name: action.name}}
        default:
            return state;
    }
}

export {
    numberReducer,
    userReducer    

}