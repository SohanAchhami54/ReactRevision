import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
   const {user}=useContext(UserContext)
  return (
    <div>
      {
         user? (
            <>
             Welcome {user.username}
            </>
         ):(
            <>
             <h1>Welcome User </h1>
            </>
         )
      }
    </div>
  )
}

export default Profile
