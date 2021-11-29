import React from 'react'
import { categories } from '../data/categoryData'

function JsxMapSample3() {


    //Kategorileri tabloda yazdır

    return (
        <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                </tr>

                {
                    categories.map((item) => (

                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                        </tr>
                    ))
                }

            </table>
        </>
    )
}

export default JsxMapSample3