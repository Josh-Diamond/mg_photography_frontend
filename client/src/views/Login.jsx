import React, { useState } from 'react'
import axios from 'axios'

export default function Login({ history }) {
    const [user, setUser] = useState("Marysa")
    const [pass, setPass] = useState("")
    const creds = {
        "username": user,
        "password": pass
    }

    const login = e => {
        e.preventDefault()
        axios
            .post('https://mg-photography-backend.herokuapp.com/api/admin', creds)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                history.push('/admin_access')
            })
            .catch(err => console.log(err))
    }

    const passHandler = e => {
        setPass(e.target.value)
    }

    const viewSite = () => {
        history.push('/')
    }
    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={e => login(e)}>
                <input type='password' placeholder='password' value={pass} onChange={e => passHandler(e)} />
            </form>
            <button onClick={viewSite}>View Site</button>
        </div>
    )
}
