import React from 'react'
import { css } from 'emotion'
import image from '../static/photography.jpg'

export default function PhotographyCard() {
    return (
        <div className={css({
            height: 350,
            width: 345,
            borderRadius: '4px',
            cursor: 'pointer',
            '-webkit-box-shadow': '13px 13px 21px 10px rgba(0,0,0,0.8)',
            '-moz-box-shadow': '13px 13px 21px 10px rgba(0,0,0,0.8)',
            boxShadow: '13px 13px 21px 10px rgba(0,0,0,0.8)',
            transitionTimingFunction: 'ease-in-out',
            transitionDuration: '.5s',
            '&:hover': {
                '-webkit-box-shadow': '13px 13px 21px 10px rgba(255,255,255,0.8)',
                '-moz-box-shadow': '13px 13px 21px 10px rgba(255,255,255,0.8)',
                boxShadow: '13px 13px 21px 10px rgba(255,255,255,0.8)',
                'h2': {
                    opacity: '1',
                },
                'img': {
                    opacity: 1
                }
            }
            
        })}>
            <img src={image} alt='Photography Gallery' className={css({ height: '100%', width: '100%', borderRadius: '4px', opacity: .8, transitionTimingFunction: 'ease-in-out', transitionDuration: '.5s',})} />
            <h2 className={css({
                marginTop: '-60%',
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 'lighter',
                textTransform: 'none',
                fontSize: '4rem',
                color: 'white',
                opacity: '.5',
                transitionTimingFunction: 'ease-in-out',
                transitionDuration: '.5s',
            })}>Photography</h2>
        </div>
    )
}
