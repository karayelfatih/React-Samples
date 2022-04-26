import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {

    const { id } = useParams()

    const [productDetail, setProductDetail] = useState({})

    useEffect(() => {
        
        fetch('https://northwind.vercel.app/api/products/' + id)
        .then((res) => res.json())
        .then((data) => {
           setProductDetail(data);
        })

    }, [])


    return (
        <div>
            <h1>Product Detail Page</h1>
            <div>
                <span>Name: {productDetail.name}</span>
            </div>
            <div>
                <span>Price: {productDetail.unitPrice}</span>
            </div>
            <div>
                <span>Supplier Id: {productDetail.supplierId}</span>
            </div>
            <div>
                <span>Category Id: {productDetail.categoryId}</span>
            </div>
            <div>
                <span>Units In Stock: {productDetail.unitsInStock}</span>
            </div>
            <div>
                <span>Reorder Level: {productDetail.reorderLevel}</span>
            </div>
        </div>
    )
}



export default ProductDetail