import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { 
    initialState,
    numberReducer,
    userReducer,
    numberAddAction,
    numberMultAction
    } from '../../store';

const UseReducer = (props) => {
    const  [statenumber, dispatchNumber] = useReducer(numberReducer, initialState)
    const  [stateuser, dispatchUser] = useReducer(userReducer, initialState)
    const  [statemult, dispatchMult] = useReducer(numberReducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
            <span className="text">{statenumber.number}</span>
            <span className="text">{stateuser.user.name}</span>
            <span className="text">{statemult.number}</span>
            <div>
                <button className='btn'
                onClick={() => dispatchUser({type: 'login', name:'Mardonis'})}>Login</button>

                <button className='btn' 
                onClick={() => numberAddAction(dispatchNumber,statenumber.number)}>+2</button>
                <button className='btn'
                onClick={() => numberMultAction(dispatchMult,statenumber.number)}>*2</button>
            </div>
            </div>
        </div>
        
    )
}

export default UseReducer
