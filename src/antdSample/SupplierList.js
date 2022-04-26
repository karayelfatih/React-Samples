import { Button, Table } from 'antd'
import React, { useEffect, useState } from 'react'

function SupplierList() {


    const [supplierList, setSupplierList] = useState([])

    const deleteSupplier = (id) => {


        let newSupplierList = supplierList.filter(q  => q.id != id);

        setSupplierList([...newSupplierList])

    }

    const columns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Company Name",
            dataIndex: 'companyName',
            key: 'companyName',
            sorter: (a, b) => a.companyName.localeCompare(b.companyName),
        },
        ,
        {
            title: "Contact Title",
            dataIndex: 'contactTitle',
            key: 'contactTitle'
        },
        {
            title:'Delete',
            dataIndex:'id',
            key:'id',
            render: id => (<Button type='primary' onClick={() => deleteSupplier(id)} danger>Delete</Button>)
        }
    ]

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/suppliers')
            .then(res => res.json())
            .then((data) => {
                setSupplierList(data)
            })
    }, [])

    let pageOptions = {
        defaultPageSize : 10,
        defaultCurrent : 1
    }

    return (
        <>
            <Table dataSource={supplierList} columns={columns} pagination={pageOptions}></Table>
        </>
    )
}

export default SupplierList