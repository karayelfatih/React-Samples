/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'

function Products2() {
    const [products, setProducts] = useState([])
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const [unitPrice, setUnitPrice] = useState('')
    const [categoryId, setCategoryId] = useState('')
    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
    }

    const addOrder = () => {


        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id:id, name: name, unitPrice: unitPrice, categoryId: categoryId, })
        }


        fetch('https://northwind.vercel.app/api/products', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log('Sipariş başarıyla eklendi!!');
                console.log(data);
            })

    }
    const deleteProducts = (id) => {
        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch('https://northwind.vercel.app/api/products/' + id, requestOptions)
        .then((res) => res.json())
        .then((data) => {
            getData();
        })


    }

    const search = () =>{
        const newSearch = products.filter(q => q.name.startsWith(rh));
        setProducts([...newSearch])
    }
    const red = () =>{
         if (discontinued === "true") {
            backgroundColor = "tomato";
        }
        else{
            backgroundColor ="beige"
        }
    }
    return (
        <>
            <div>
                <input type='number' value={id} onChange={(e) => setProducts(e.target.value)}></input>
                <button onClick={() => search()}>Search Id</button>
            </div>
            <div>
                <label>Id             </label>
                <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div>
                <label>Name:        </label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>unit Price</label>
                <input type='text' value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
            </div>
            <div>
                <label>categoryId:</label>
                <input type='text' value={categoryId} onChange={(e) => setCategoryId(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addOrder()}>Add</button>
            </div>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Unit Price</td>
                    <td>categoryId</td>
                    <td>Discontinued</td>
                </tr>

                {
                    products && products.map((item, key) => {
                        return (

                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.name.toUpperCase()}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.categoryId}</td>
                                <td>{item.discontinued}</td>
                                <td><button onClick={() => deleteProducts(item.id)}>Delete</button></td>
                            </tr>

                        )
                    })
                }

            </table>
        </>
    )
}

export default Products2
