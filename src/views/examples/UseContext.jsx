import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'

const UseContext = (props) => {
    const {state, setState} = useContext(DataContext)
    function setNumber(n){
     setState({
        ...state,
        number:n
     })   
    }
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="cenetr">
              <span className='center'>{state.text}</span> 
              <span className= 'center'>{state.number}</span>
              <input type='number' className='center'
              onChange={(e) => setNumber(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseContext
