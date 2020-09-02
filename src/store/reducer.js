const initialState = {
    a: 1,
    b: 1
}

const reducer = ( state = initialState, action) => {
    if( action.typ === 'UPDATE_A'){
        return {
            ...state,
            a: state.a + state.b
        }
    }
    if( action.typ === 'UPDATE_B'){
        return {
            ...state,
            b: state.a + state.b
        }
    }
    return state;
}

export default reducer;