import React, { useState } from 'react'

function StateSample1() {

    const [city, setCity] = useState('İstanbul');

    const change = () => {
        setCity('Ankara')
    }

    return (
        <>
            <h1>{city}</h1>
            <button onClick={change}>Change Name</button>
        </>
    )
}

export default StateSample1