/* eslint-disable no-unused-vars */
import { getByDisplayValue } from '@testing-library/react'
import React, { useState } from 'react'
import { categories } from '../data/categoryData'

function StateSample7() {


    const [categoryName, setCategoryName] = useState(categories)
    
    const addCategory = () => {

        
    }


    return (
        <>
            
            <ul>
                {
                    categories.map((item) => (<li>{item.id}</li>))
                }
            </ul>

           
                <h></h>


        </>
    )
}

export default StateSample7