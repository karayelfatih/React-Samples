import React from 'react'
import { suppliers } from '../data/supplierData'

function JsxMapSample4() {


    return (
        <>

            <table>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>Country</td>
                </tr>

                {
                    suppliers.map((item) => {


                        if (item.address.country === 'Japan') {
                            return (
                                <tr  style={{backgroundColor:'tomato'}}>
                                    <td>{item.id}</td>
                                    <td>{item.companyName}</td>
                                    <td>{item.contactName}</td>
                                    <td>{item.address?.country}</td>

                                </tr>
                            )
                        }
                        else{
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.companyName.toUpperCase()}</td>
                                    <td>{item.contactName}</td>
                                    <td>{item.address?.country}</td>

                                </tr>
                            )
                        }


                    })
                }



            </table>

        </>
    )
}

export default JsxMapSample4