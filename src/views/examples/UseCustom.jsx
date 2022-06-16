import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';
import {useCounter } from '../../hooks/useCounter';
import {useFetch } from '../../api/useFetch';


const UseRef = (props) => {
    const [count, inc, dec] = useCounter();
    const url  = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url,'get')

    //console.log(response)

    function showStates(states) {
        console.log(states)
        return states.map(item => <li>{item.nome} - {item.sigla}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="ceter">
                <span className="text">{count}</span>
                <div>
                    <button onClick={inc}>INC</button>
                    <button onClick={dec}>DEV</button>
                </div>
            </div>
            <SectionTitle title="Exxercicio #02" />
            <div className="center" >
            <ul>
               {response.data ? showStates(response.data): 'teste'}
            </ul>
            </div>
        </div>
    )
}

export default UseRef
