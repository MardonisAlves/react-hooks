import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
function calcFatoril(n) {
    if (n < 0) return "Não existe"
    if (n === 0) return 1

    return calcFatoril(n - 1) * n;
}


const UseEffect = (props) => {
    const [currentnumber, setCurrentnumber] = useState([])
    console.log(currentnumber)

    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(0)
   
     useEffect(function () {
         return setFatorial(calcFatoril(number))
     }, [number])



    const itensopme = (n)=> {
        const filterNumber = currentnumber.filter(i => i === n)
        if(filterNumber.length === 0){
            setCurrentnumber([...currentnumber,n])
        }
    } 
   

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio 001"/>
            <div className="center">
                <span className="text">Fatorial:</span>
                <span className="text red">{fatorial}</span>
                <input type="number" className='input'
                    value={number}
                    onChange={e => setNumber(e.target.value)} />
                    <button
                        className='title'
                        onClick={() => itensopme(number)}
                    >Add</button>
               
            </div>
            <SectionTitle title="Exercicio 002"/>
        </div>
    )
}

export default UseEffect
