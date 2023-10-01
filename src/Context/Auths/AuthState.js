import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {

    const [userName, setUserName] = useState('Profile Name')

    const setProfile = (user)=>{
        setUserName(user)
    }

    return (
        <AuthContext.Provider value={{userName, setProfile}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState