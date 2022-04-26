import React from 'react'
import { suppliers } from '../data/supplierData'

function JsxMapSample5() {



    return (
        <>
            <ul>
                {
                    suppliers.map((item,key) => (<li key={key}>{item.companyName}</li>))
                }
            </ul>
        </>
    )
}

export default JsxMapSample5