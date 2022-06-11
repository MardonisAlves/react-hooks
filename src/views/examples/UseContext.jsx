import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/store'

const UseContext = (props) => {
    const {state, setState} = useContext(DataContext)
    function setaddNumber(n){
     setState({
        ...state,
        number:n
     })   
    }

    const {number, setNumber} = useContext(AppContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercicio  #01"/>
            <div className="center">
              <span className='center'>{state.text}</span> 
              <span className= 'center'>{state.number}</span>
              <input type='number' className='center'
              onChange={(e) => setaddNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercicio #02" />
            <div className="center">
                <span className='btn'>{number}</span>
                <div>
                    <button className='btn' 
                    onClick={() => setNumber(number -1)}>-1</button>

                    <button className='btn' 
                    onClick={() => setNumber(number +1)}>+1</button>
                    

                </div>
            </div>
        </div>
    )
}

export default UseContext
