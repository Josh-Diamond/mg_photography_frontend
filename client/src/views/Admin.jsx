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
            <ul>
                <li>Manage Photos - upload, edit, delete</li>
                <li>Customize Website - change profile picture and gallery album art</li>
            </ul>
        </div>
    )
}
