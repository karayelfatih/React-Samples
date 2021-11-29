/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'


function CommentList() {
    
    const [comments, setComments] = useState([])
    const [name, setProductName] = useState('')
    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) =>res.json())
        .then((data) =>{
            setComments(data)
        })

    }
    const searchComments = () => {

        
        const newComments = comments.filter(q => q.name.startsWith(odio));


        setComments([...newComments])

    }
    return (
        <>
        <div>
                <input type='text' value={name} onChange={(e) => setComments(e.target.value)}></input>
                <button onClick={() => searchComments()}>Search Comments</button>
            </div>

            <table>
                <tr>
                    <td> Id</td>
                    <td> Post Id </td>
                    <td>Name </td>
                    <td> Email</td>
                </tr>

                {
                    comments.map((item, key) =>{
                        return(
                            <tr key={key}>
                                <td>{item.id}</td>
                                <td>{item.postId}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    )
}

export default CommentList
