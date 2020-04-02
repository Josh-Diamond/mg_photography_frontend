import React, { useEffect } from 'react'
import { css } from 'emotion'
import ModelingCard from '../components/ModelingCard'
import PhotographyCard from '../components/PhotographyCard'
import ArtCard from '../components/ArtCard'
import { Link } from 'react-router-dom'
import ViewAllCard from '../components/ViewAllCard'

export default function Gallery({ history, setModelingGallery, setPhotographyGallery, setArtGallery }) {
    useEffect(() => {
        setModelingGallery(false)
        setPhotographyGallery(false)
        setArtGallery(false)
    },[])
    return (
        <div className={css({
            height: '100vh',
            width: '100vw',
            backgroundColor: '#110C11',
            // background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)',
            '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
        })}>
            <div className={css({
                position: 'fixed',
                zIndex: 7,
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: 'auto',
                backgroundColor: 'rgba(0,0,0, 0.3)',
            })}>
                <div className={css({
                    display: 'flex',
                    // border: '1px solid red',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: '100%',
                    '@media (max-width: 950px)': {
                        flexDirection: 'column'
                    },
                })}>
                    <h2 className={css({
                        fontFamily: "'Great Vibes', cursive",
                        fontWeight: 'bold',
                        // marginLeft: '1%',
                        textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                        color: '#41cc66',
                        fontSize: '3rem',
                        // marginTop: '7px',
                        paddingBottom: '10px',
                        // borderBottom: '3px solid #e6e6e6',
                        // boxShadowBottom: '0px 0px 200px rgba(255, 255, 255, 1)',
                        borderRadius: '50%',
                        '@media (max-width: 950px)': {
                            margin: '2%'
                        },
                        '@media (max-width: 600px)': {
                            marginTop: '5%'
                        },
                        '@media (max-width: 470px)': {
                            fontSize: '2rem'
                        },
                    })}>Gallery Selection</h2>
                    <div className={css({
                        //  border: '1px solid purple',
                         overflowY: 'scroll',
                         width: '600px',
                         display: 'block',
                         '@media (max-width: 600px)': {
                            width: '500px'},
                        '@media (max-width: 470px)': {
                            width: '450px'
                        },
                        '@media (max-width: 470px)': {
                            width: '400px'
                        },
                        '@media (max-width: 400px)': {
                            width: '380px'
                        },
                        '@media (max-width: 350px)': {
                            width: '350px'
                        },
                    })}>
                        <Link to='/gallery' className={css({
                            textDecoration: 'none',
                        })}><ViewAllCard /></Link>
                        <Link to='/gallery' onClick={() => setModelingGallery(true)} className={css({
                            textDecoration: 'none'
                        })}><ModelingCard /></Link>
                        <Link to='/gallery' onClick={() => setPhotographyGallery(true)} className={css({
                            textDecoration: 'none'
                        })}><PhotographyCard /></Link>
                        <Link to='/gallery' onClick={() => setArtGallery(true)} className={css({
                            textDecoration: 'none'
                        })}><ArtCard /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
