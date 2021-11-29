import React, { useEffect, useState } from 'react'

function OrderList() {

    const [orders, setOrders] = useState([])
    const [count, setCount] = useState(0)

    useEffect(() => {
        getData()
    }, [])


    const getData = () => {

        fetch('https://northwind.vercel.app/api/orders')
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            })

    }


    const getOrders = () => {

        fetch('https://northwind.vercel.app/api/orders')
        .then((res) => res.json())
        .then((data) => {
            setOrders(data.slice(0,count));
        })
    }

    return (
        <>

            <div>
                <label>Count:</label>
                <input type='text' value={count} onChange={(e) => setCount(e.target.value)} />
            </div>
            <div>
                <button onClick={() => getOrders()}>Get Orders</button>
            </div>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Ship Name</td>
                    <td>Street</td>
                    <td>Country</td>
                </tr>

                {
                    orders.map((item, key) => {
                        return (

                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.shipName}</td>
                                <td>{item.shipAddress?.street}</td>
                                <td>{item.shipAddress?.country}</td>
                            </tr>

                        )
                    })
                }

            </table>

        </>
    )
}

export default OrderList