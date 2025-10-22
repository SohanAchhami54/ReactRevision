import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const {user}=useContext(UserContext);
    if(!user ) return <>Please login</>
    return <h1>Welcome {user.username} </h1>
}

export default Login
