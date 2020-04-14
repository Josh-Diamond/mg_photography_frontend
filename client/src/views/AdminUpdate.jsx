import React from 'react'
import { css } from 'emotion'

export default function AdminUpdate() {
    return (
        <div className={css({
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
            
        })}>
            <div className={css({
                height: '260px',
                width: '260px',
                backgroundColor: '#110C11',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            })}>
                <h1 className={css({
                        color: '#41cc66',
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: '6.2rem',
                        textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                        position: 'relative',
                        left: '-6px'
                    })}>M G</h1>
            </div>
        </div>
    )
}
