import React, { useEffect, useState } from 'react'

function AddCategory() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [categoryList, setCategoryList] = useState([])

    const addCategory = () => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, description: description })
        }

        fetch('https://northwind.vercel.app/api/categories', requestOptions)
        .then((res) => res.json())
        .then((data) => {

            getCategories()
        
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = () => {
        fetch('https://northwind.vercel.app/api/categories')
        .then((res) => res.json())
        .then((data) => {
            setCategoryList(data);
        })
    } 


    const deleteCategory = (id) => {
        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch('https://northwind.vercel.app/api/categories/' + id, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            getCategories();
        })


    }

    return (
        <>
        <div>
            <label>Category Count: {categoryList.length}</label>
        </div>
            <div>
                <label>Name:</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addCategory()}>Add</button>
            </div>

            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Description</td>
                    <td>Delete</td>
                </tr>

                {
                    categoryList.map((item, key) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => deleteCategory(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default AddCategory