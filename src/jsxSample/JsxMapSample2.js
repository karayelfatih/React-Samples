import React from 'react'
import { categories } from '../data/categoryData'

function JsxSample4() {

  
    return (
        <>
            <ul>
                {
                    categories.map((item) => (<li>{item.name}</li>))
                }
            </ul>


        </>
    )
}

export default JsxSample4