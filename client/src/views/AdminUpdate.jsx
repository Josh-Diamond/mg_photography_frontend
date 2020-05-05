import React from 'react'
import { css } from 'emotion'
import { Link } from 'react-router-dom'
import { TiArrowBack } from 'react-icons/ti'
import { AiFillHome } from 'react-icons/ai'

export default function AdminUpdate() {

    const logout = e => {
        localStorage.removeItem('token')
    }

    return (
        <div className={css({
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)',
            '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
            })}>
                
                {/* nav start */}
                <div className={css({
                    display: 'flex',
                    width: '100vw',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    // fontSize: '2rem',
                    marginTop: '10px'
                })}>
                    <Link to='/admin_access' className={css({
                            color: '#e6e6e6',
                            transition: '.4s',
                            textDecoration: 'none',
                            
                            "&:hover": {
                                color: '#41cc66',
                            }
                        })}>
                    <TiArrowBack className={css({
                        marginLeft: '10px',
                        fontSize: '2.5rem'
                    })} />
                    </Link>
                    <Link to='/' onClick={logout} className={css({
                            color: '#e6e6e6',
                            transition: '.4s',
                            textDecoration: 'none',
                            
                            "&:hover": {
                                color: '#41cc66',
                            }
                        })}>
                    <AiFillHome className={css({
                        marginRight: '14px',
                        fontSize: '2rem'
                    })} />
                    </Link>
                </div>

                <h1 className={css({
                 color: '#41cc66',
                 fontFamily: "'Great Vibes', cursive",
                 fontSize: '5rem',
                 textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                 paddingTop: '25px',
                 '@media (max-width: 550px)': {
                     fontSize: '3rem'
                 }
            })}>
                Update Site
            </h1>

                </div>
    )
}
