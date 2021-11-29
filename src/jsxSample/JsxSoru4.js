import React from 'react'
import { products } from '../data/productData'

    
 function JsxSoru4() {
    return (
        <>
            
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Unit Price</td>
                        <td>units In Stock</td>
                        <td>Category Id</td>
                        <td>K D V</td>
                    </tr>
                    {
                        products.map((item) => {
                            return( 
                                <tr>
                                    <td>{item.id}</td>
                                    <td >{item.name.toUpperCase()}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.unitsInStock}</td>
                                    <td>{item.categoryId}</td>
                                    <td>{item.unitPrice *1.18.toFixed(2)}</td>
                                </tr>
                            )
                        })
                    }

                </table>
           
        </>
    )
}
export default JsxSoru4