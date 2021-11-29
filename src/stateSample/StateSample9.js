/* eslint-disable no-unused-vars */
import { getByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'

function StateSample7() {

    var defaultCountries = ['Türkiye','Hollanda','Almanya','Brezilya','Şili','Küba','İran']

    const [name, setName] = useState('çağatay')

    const [countryName, setCountryName] = useState('')
    const [countries, setCountries] = useState(defaultCountries)



    const getValue = () => {
        alert(name)
    }


    const addCountry = () => {

        setCountries([...countries, countryName])
    }


    return (
        <>
            <label>Name:</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

            <h1>{name}</h1>

            <button onClick={() => getValue()}>Get Input Value</button>
            <hr></hr>
            <ul>
                {
                    countries.map((item) => (<li>{item}</li>))
                }
            </ul>

            <input type='text' value={countryName} onChange={(e) => setCountryName(e.target.value) }></input>
            <button onClick={() => addCountry()}>Add</button>

                <h></h>


        </>
    )
}

export default StateSample7