/* eslint-disable no-unused-vars */
import React from 'react'
import { products } from '../data/productData'


function ProductPage(props) {
    return (
        <>
            <div>
                <h1> Id {props.item.id}</h1>
                <p> Supplier Id{props.item.supplierId}</p>
                <p> Unit Price {props.item.unitPrice}</p>
                <p> Name  {props.item.name}</p>
            </div>
        </>
    )
}

export default ProductPage
