import React from 'react'
import UserListRow from './UserListRow'

function UserList(props) {



    return (
        <>
            {
                props.usersData.map((user) => (
                    <UserListRow item={user}></UserListRow>

                ))
            }
        </>
    )
}

export default UserList