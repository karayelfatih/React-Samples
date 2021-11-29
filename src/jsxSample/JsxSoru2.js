/* eslint-disable no-unused-vars */
import React from 'react'

 function JsxSoru2() {

    const products = {
        name:'Banana',
        Price:'5$',
        unitsInStock:20,
        status:'true'
    }
    return (
        <>
        <div>
            <span>{products.name}</span> 
            <span>{products.Price}</span> 
            <span>{products.unitsInStock}</span> 
            <span>{products.status}</span> 

        </div>

        
        </>
    )
}
export default JsxSoru2