import React from 'react'
import { css } from 'emotion'

export default function Thumbnail({ image, setSelected, mobile, setOpenMenu }) {
    const mobileSelector = () => {
        setSelected(image)
        setOpenMenu(false)
    }

    

    if(mobile) {
    return (
        <div onClick={mobileSelector} className={css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            opacity: .8,
            "&:hover": {
                opacity: 1
            },
            '@media (max-width: 1025px)': {
                padding: '1%',
            },
        })}>
            <img src={`${image} + '.jpg'`} className={ css({
                maxWidth: '200px',
                '@media (max-width: 1150px)': {
                    maxWidth: ' 280px'
                },
                '@media (max-width: 700px)': {
                    maxWidth: ' 250px'
                },
                '@media (max-width: 600px)': {
                    maxWidth: '98%'
                },
            })} />
        </div>
    ) 
 }
 
 else {
    return (
        <div onClick={() => setSelected(image)} className={css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            opacity: .8,
            "&:hover": {
                opacity: 1
            },
            '@media (max-width: 1025px)': {
                padding: '1%',
            },
        })}>
            <img src={image} className={ css({
                maxWidth: '200px',
                '@media (max-width: 1150px)': {
                    maxWidth: ' 280px'
                },
                '@media (max-width: 700px)': {
                    maxWidth: ' 250px'
                },
                '@media (max-width: 600px)': {
                    maxWidth: '98%'
                },
            })} />
        </div>
    ) 
 }

}

