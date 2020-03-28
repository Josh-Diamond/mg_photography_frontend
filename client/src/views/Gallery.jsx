import React, { useEffect } from 'react'
import { css } from 'emotion'
import ModelingCard from '../components/ModelingCard'
import PhotographyCard from '../components/PhotographyCard'
import ArtCard from '../components/ArtCard'
import { Link } from 'react-router-dom'

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
            background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)'
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
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    height: '100%',
                    '@media (max-width: 950px)': {
                        flexDirection: 'column'
                    },
                })}>
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
    )
}
