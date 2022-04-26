import { Button, Input, Table } from 'antd'
import Form from 'antd/lib/form/Form'
import FormItem from 'antd/lib/form/FormItem'
import React, { useEffect, useRef, useState } from 'react'




function AddCustomer() {

    const [customerList, setCustomerList] = useState([])

    const add = (values) => {

        let requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }

        fetch('https://northwind.vercel.app/api/customers', requestOptions)
            .then(res => res.json())
            .then((data) => {

                setCustomerList([...customerList, data])

            })

    }

    const tableColumns = [
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
        }
    ]

    useEffect(() => {

        fetch('https://northwind.vercel.app/api/customers')
            .then(res => res.json())
            .then((data) => {
                setCustomerList(data)
            })

    }, [])


    let span = useRef()
    const changeColor = () => {
        //1. yol spana bir style ver o style state bağla
        //2. yol
        // document.getElementById('text').style.color = 'tomato';

        //3. yol
        span.current.style.color = 'tomato'

    }

    return (
        <>

            <span id='text' ref={span} >aman da aman</span>
            <button onClick={() => changeColor()}>Change</button>

            <Form
                name='addCustomer'
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 4 }}
                onFinish={add}
            >

                <FormItem
                    label='Company Name'
                    name='companyName'
                    rules={[{ required: true, message: 'Please input your companyName!' }]}
                >
                    <Input></Input>
                </FormItem>

                <FormItem
                    label='Contact Name'
                    name='contactName'
                >
                    <Input></Input>
                </FormItem>

                <FormItem
                    label='Contact Title'
                    name='contactTitle'
                >
                    <Input></Input>
                </FormItem>

                <FormItem>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </FormItem>

            </Form>

            <hr></hr>
            <Table columns={tableColumns} dataSource={customerList}></Table>
        </>
    )
}

export default AddCustomer