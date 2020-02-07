import React, { useState, useEffect } from 'react';

const UserContainer = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=2', {
            method: 'Get',
        }).then((response) => {
                return response.json();
            }).then((response) => {
                console.log(response)
                setUsers(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <p>Rendering some value</p>
            {
                users.map(user =>( 
                    <div key={user.id}>
                        <p>First Name:{user.first_name}</p>
                        <p>Last Name:{user.last_name}</p>
                        <p>Email:{user.email}</p>
                        <img src={user.avatar}/>
                    </div>
                )
                )
            }
        </>
    )
}
export default UserContainer;