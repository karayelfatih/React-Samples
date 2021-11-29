import React, {useState} from 'react'

function StateSample4() {

    //string, number, bool, object

    var defaultUser = {
        name:'Çağatay',
        surname:'Yıldız'
    }

    const [user, setUser] = useState(defaultUser);


    const change = () => {

        user.name = "Mert";

        var newUser = {
            name: user.name
        }



        setUser(newUser)

    }

    return (
        <>
            <h1>{user.name}</h1>
            <button onClick={change}>Change User</button>
        </>
    )
}

export default StateSample4