import React, { useState } from 'react'

function StateSample() {


    const [sayac, setSayac] = useState(0)


    const increase = () => {
        setSayac(sayac + 1)
    }

    return (
        <>
            <h1>{sayac}</h1>
            <button onClick={increase}>Increase</button>
            
        </>
    )
}

export default StateSample