import React, { useState, useEffect } from 'react'

//useEffect içerisinde datayı çekeceğim ve bir state e atayacağım.


function SupplierList() {

    const [supplierList, setSupplierList] = useState([])


    //use effect ile api ye bağlanıp verileri alacağım ve state e koyacağım.
    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then((res) => res.json())
            .then((data) => {
                setSupplierList(data);
            })

    }, [])

    return (
        <>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>Contact Title</td>
                </tr>

                {
                    supplierList.map((item, key) => {
                        return (<>

                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.companyName}</td>
                                <td>{item.contactName}</td>
                                <td>{item.contactTitle}</td>
                            </tr>

                        </>)
                    })
                }
            </table>
        </>
    )
}

export default SupplierList