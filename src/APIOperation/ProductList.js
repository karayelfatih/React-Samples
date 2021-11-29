import React, { useEffect, useState } from 'react'

function ProductList() {

    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {

        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })

    }


    const getproducts = () => {

        fetch('https://northwind.vercel.app/api/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data.slice(0,count));
        })
    }
    const getProducts = () => {

        let newProducts = products.filter(q => q.unitPrice > minPrice && q.unitPrice < maxPrice);
        setProducts([...newProducts])
    }
    return (
        <>

            <div>
                <label>Min Price</label>
                <input type='text' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            </div>
            <div>
                <label>Max Price</label>
                <input type='text' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            </div>
            <div>
                <button onClick={() => getProducts()}>Get Products</button>
                
            </div>
            <div>
                <label>Count:</label>
                <input type='text' value={count} onChange={(e) => setCount(e.target.value)} />
            </div>
            <div>
                <button onClick={() => getproducts()}>Get products</button>
            </div>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Unit Price</td>
                    <td>quantityPerUnit</td>
                </tr>

                {
                    products.map((item, key) => {
                        return (

                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                                <td>{item.quantityPerUnit}</td>
                            </tr>

                        )
                    })
                }

            </table>

        </>
    )
}

export default ProductList