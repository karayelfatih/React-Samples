import React, { useState } from 'react'
import { products } from '../data/productData'


function StateSample9() {

    const [productList, setProductList] = useState(products);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [name, setProductName] = useState('')

    const getProducts = () => {

        let newProducts = productList.filter(q => q.unitPrice > minPrice && q.unitPrice < maxPrice);
        setProductList([...newProducts])
    }

    const refreshData = () => {
        setProductList(products)
    }


    const searchProducts = () => {

        //Butona tıklandığında inputtaki datayı alıp o ile başlayan ürünleri getir!

        // const newProducts = productList.filter(q => q.name.startsWith(name));
        const newProducts = products.filter(q => q.name.startsWith(name));


        setProductList([...newProducts])

    }

    return (
        <>

            <div>
                <input type='text' value={name} onChange={(e) => setProductName(e.target.value)}></input>
                <button onClick={() => searchProducts()}>Search Products</button>
            </div>

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
                <button onClick={() => refreshData()}>Refresh</button>
            </div>

            <table>
                <tr>
                    <td>Name</td>
                    <td>Stock</td>
                    <td>Price</td>
                </tr>

                {
                    productList && productList.map((item, key) =>
                    (<tr>
                        <td>{item.name}</td>
                        <td>{item.unitsInStock}</td>
                        <td>{item.unitPrice}</td>
                    </tr>))
                }
            </table>

        </>
    )
}

export default StateSample9