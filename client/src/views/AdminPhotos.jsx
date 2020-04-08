import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import image from '../static/modeling.jpg'
import ManageCard from '../components/ManageCard'
import axios from 'axios'

export default function AdminPhotos({ photos }) {
    const [allPhotos, setAllPhotos] = useState([])

    useEffect(() => {
        axios
            .get('https://mg-photography-backend.herokuapp.com/api/pictures')
            .then(res => setAllPhotos(res.data))
            .catch(err => console.log(err))
    },[])

    return (
        <div className={css({
        height: '100vh',
        width: '100vw',
        background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)',
        '-webkit-touch-callout': 'none',
            '-webkit-user-select': 'none',
            '-khtml-user-select': 'none',
            '-moz-user-select': 'none',
            '-ms-user-select': 'none',
            'user-select': 'none',
        })}>
            <h1 className={css({
                 color: '#41cc66',
                 fontFamily: "'Great Vibes', cursive",
                 fontSize: '5rem',
                 textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                 paddingTop: '25px'
            })}>
                Manage Photos
            </h1>
            <div className={css({
                display: 'flex',
                flexWrap: 'wrap'
            })}>
                {allPhotos.length !== 0 ?
                allPhotos.map(photo => {
                    let img_url = photo.image_url.slice(18, photo.image_url.length)
                   return <ManageCard photo={photo} image={img_url} />
                }) :
                <p>Loading...</p>}                
            </div>
        </div>
    )
}
