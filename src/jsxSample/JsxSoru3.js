import React from 'react'
import { products } from '../data/productData'
 

 function JsxSoru3() {
    return (
        <>
            <ul>
                <li>
                {
                    products.map((item) => (<li>{item.name}</li>))
                }
                </li>
            </ul>
        </>
    )
}
export default JsxSoru3