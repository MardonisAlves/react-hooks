import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    cart:[],
    products:[],
    user:'',
    // foco
    number:0
}

function reducer(state , action){
  
    switch (action.type) {
        case 'add2':
            return {...state, number:state.number + 2}
        case 'login':
            return {...state, user:{name: action.name}}
        default:
            return state;
    }
}

const UseReducer = (props) => {
    const  [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
            <span className="text">{state.number}</span>
            <span className="text">{state.user.name}</span>
            <div>
                <button className='btn'
                onClick={() => dispatch({type: 'login', name:'Mardonis'})}>Login</button>

                <button className='btn' 
                onClick={() => dispatch({type:'add2'})}>+2</button>
            </div>
            </div>
        </div>
        
    )
}

export default UseReducer
