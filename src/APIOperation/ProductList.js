import React, { useEffect, useState } from 'react'

import _ from 'lodash'
import { Link } from 'react-router-dom';


function ProductList() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sortAsc, setSortAsc] = useState(true);


    

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })

        fetch('https://northwind.vercel.app/api/categories')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
            })

    }, [])


    const changeOption = (selectedValue) => {

        var newProducts = products.filter(q => q.categoryId == selectedValue);
        setProducts([...newProducts])
    }


    const sortProducts = () => {

        if(sortAsc){
            var sortedProducts = _.orderBy(products, ['name'],['asc']); 
            setProducts([...sortedProducts])
            setSortAsc(false)
        }
        else{
            var sortedProducts = _.orderBy(products, ['name'],['desc']); 
            setProducts([...sortedProducts])
            setSortAsc(true)

        }
     
        // let sortedProducts = products.sort(compare)

        // function compare(a, b) {

        //     if(sortAsc == true){

        //         setSortAsc(false)

        //         if (a.name < b.name) {
        //             return -1;
        //         }
        //         if (a.name > b.name) {
        //             return 1;
        //         }
        //         return 0;
                
        //     }
        //     else{

        //         setSortAsc(true)
                
        //         if (a.name > b.name) {
        //             return -1;
        //         }
        //         if (a.name < b.name) {
        //             return 1;
        //         }
        //         return 0;

        //     }

        // }

        // setProducts([...sortedProducts])

    }

    return (
        <div>

            {/* 
            <div>
                <select onChange={(e) => changeOption(e.target.value)}>
                    <option>Hepsi</option>
                    {
                        categories.map((item, key) => {
                            return (<option key={key} value={item.id}>{item.name}</option>)
                        })
                    }
                </select>
            </div>
            <div>

                 */}
            <div>
                <button onClick={() => sortProducts()}>Sort Products</button>
                <table>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Category Id</td>
                        <td>Go to Detail</td>
                    </tr>

                    {
                      products &&  products.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{Number(item.unitPrice)?.toFixed(2)}</td>
                                    <td>{item.categoryId}</td>
                                    <td><Link to={'/productdetail/' + item.id}> Detail Page </Link></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

        </div>
    )
}

export default ProductList