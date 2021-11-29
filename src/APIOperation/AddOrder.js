import React, { useEffect, useState } from 'react'

function AddOrder() {

    const [customers, setCustomers] = useState([]);


    const [shipName, setShipname] = useState('')
    const [freight, setFreight] = useState(0)
    const [shipVia, setShipVia] = useState(0)
    const [requiredDate, setRequiredDate] = useState('')

    const [customerId, setCustomerId] = useState('')


    useEffect(() => {

        fetch('https://northwind.vercel.app/api/customers')
            .then((res) => res.json())
            .then((data) => {
                setCustomers(data)
            })

    }, [])


    const addOrder = () => {


        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ shipVia: shipVia, freight: freight, shipName: shipName, customerId: customerId, requiredDate: requiredDate })
        }


        fetch('https://northwind.vercel.app/api/orders', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                console.log('Sipariş başarıyla eklendi!!');
                console.log(data);
            })

    }

    return (
        <>
            <div>
                <label>Required Data:</label>
                <input type='datetime-local' value={requiredDate} onChange={(e) => setRequiredDate(e.target.value)} />
            </div>
            <div>
                <label>Customers:</label>
                <select onChange={(e) => setCustomerId(e.target.value)}>
                    {
                        customers.map((item, key) => <option key={key} value={item.id}>{item.companyName}</option>)
                    }
                </select>
            </div>

            <div>
                <label>Ship Name:</label>
                <input type='text' value={shipName} onChange={(e) => setShipname(e.target.value)} />
            </div>
            <div>
                <label>Freight:</label>
                <input type='text' value={freight} onChange={(e) => setFreight(e.target.value)} />
            </div>
            <div>
                <label>ShipVia:</label>
                <input type='text' value={shipVia} onChange={(e) => setShipVia(e.target.value)} />
            </div>
            <div>
                <button onClick={() => addOrder()}>Add</button>
            </div>

        </>
    )
}

export default AddOrder