import React from 'react'
import { css } from 'emotion'

export default function Pictures({ history }) {
    const goBack = () => {
        history.goBack()
    }
    return (
         <div className={css({
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '-webkit-touch-callout': 'none',
            '-webkit-user-select': 'none',
            '-khtml-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
            background: "radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)"
        })}>
            <h1 className={css({
                color: '#41cc66',
                fontFamily: "'Great Vibes', cursive",
                fontSize: '7rem',
                textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                '@media (max-width: 450px)': {
                    fontSize: '5rem'
                },
            })}>Under Construction Babe 🚧</h1>
            <button onClick={goBack}>GO BACK</button>
        </div>
    )
}
