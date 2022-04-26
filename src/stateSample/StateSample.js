
import React, { useState } from 'react'
import { users } from '../data/usersData'


function StateSample8() {

    const [userList, setUserList] = useState(users)

    const [name, setName] = useState('')
    const [usernamne, setUserName] = useState('')
    const [email, setEmail] = useState('')
    
    const [usercount, setUsercount] = useState(0);

    const addUser = () => {


        let newUser = {
            name: name,
            username: usernamne,
            email: email
        }


        setUserList([...userList, newUser])
    }


    const deleteUser = (id) => {

        const filteredUser = userList.filter(q => q.id !== id);

        setUserList([...filteredUser])

    }


    const getUsers = () => {

        var newUsers = userList.slice(0,usercount)

        setUserList([...newUsers])

    }

    return (
        <>
            <div>
                <div>
                    <label>Name:</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type='text' value={usernamne} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div>
                    <label>EMail:</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <button onClick={() => addUser()}>Add New User</button>
                </div>
            </div>


            <hr></hr>

            <div>
                <div>
                    <label>Count: </label>
                    <input type='text' value={usercount} onChange={(e) => setUsercount(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={() => getUsers()}>Get Users</button>
                </div>
            </div>

            <table>
                <tr>
                    <td>Name</td>
                    <td>Username</td>
                    <td>EMail</td>
                    <td>Delete</td>
                </tr>

                {
                    userList && userList.map((item, key) => (
                        <tr key={key}>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>

        </>
    )
}

export default StateSample8