import React, { useState } from 'react'
import { categories } from '../data/categoryData'

function StateSample7() {

    const [categoryList, setCategoryList] = useState(categories)

    const removeCategories = () =>{
        setCategoryList([]);
    }

    const deleteCategoryId = (id) =>{
        var filteredCategories = categoryList.filter (q => q.id !== id);
        setCategoryList(filteredCategories);
    }
    const addCategory = () =>{
        var newCategoryItem ={
            id:22,
            name :'electronic',
            description : 'Phone charge item'
        }
        var newList = [...categoryList,newCategoryItem];
        setCategoryList(newList);
    }
    
    return (
        <>
        <button onClick={addCategory}>Add</button>
        <button onClick={removeCategories}>Kategorileri Sil</button>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>

                </tr>

                {
                    categoryList.map((item)=>(
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <button onClick = { () => deleteCategoryId(item.id)}>Delete</button>
                        </tr>
                    ))

                    

                    
                }
            </table>
        </>
    )
}

export default StateSample7
