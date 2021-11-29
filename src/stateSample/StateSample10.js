//3) Ekrana bir input bir buton koy. Butona tıkladığında inputa girdiğin değerin büyük harfini console a yazsın. ( input a bir state bağlayacaksın)

import React, { useState } from 'react'

function StateSample10() {

    const [name, setName] = useState('');

    const calcData = () => {
        console.log(name.toUpperCase());
    }

    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => calcData()}>Calc</button>
        </div>
    )
}

export default StateSample10