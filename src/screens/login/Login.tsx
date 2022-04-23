import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
    return <div>
        Login screen where user will enter pin in order to log in to the app<br/>
        <input type="text" placeholder={'Your pin'}/><br/>
        <Link to="/dashboard">Login</Link>
    </div>
}
