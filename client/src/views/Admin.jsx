import React from 'react'

export default function Admin({ history }) {
    const logout = () => {
        localStorage.removeItem('token')
        history.push('/admin')
    }
    return (
        <div>
            <h2>Admin Access</h2>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
