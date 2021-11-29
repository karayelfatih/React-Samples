import React,{useState} from 'react'

function StateSample5() {
    const [sayac,setSayac] = useState(0);
    const upp = () =>{
        setSayac(sayac + 2)
    }
    const down = () =>{
        setSayac(sayac - 2)
    }
    return (
        <>
            <h1>{sayac}</h1>
            <h1>{sayac}</h1>
            <h1>{sayac}</h1>
            <button onClick ={upp}>Sayıları arttır</button>
            <button onClick ={down}>Sayıları düşür</button>

        </>
    )
}

export default StateSample5
