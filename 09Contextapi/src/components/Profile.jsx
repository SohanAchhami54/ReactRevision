import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
    console.log('User details:',user)
     if(!user){
        return <div>Please login !</div>
     }
     if(user){
        return <div>Welcome {user.name} </div>
     }
}

export default Profile
