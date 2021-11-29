import React,{useState} from 'react'

function StateSample4() {

    const [city, setCity] = useState ('İstanbul');
    const change=()=>{
        setCity("Ordu")
    }
    return (
        <>
            <h1>{city}</h1>
            <button onClick = {change}>Change City</button>
        </>
    )
}

export default StateSample4
