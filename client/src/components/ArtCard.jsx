import React from 'react'
import { css } from 'emotion'
import image from '../static/art.jpg'

export default function ArtCard() {
    return (
        <div className={css({
            height: 350,
            width: 350,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // border: '1px solid white',
            borderRadius: '4px',
            cursor: 'pointer',
            '-webkit-box-shadow': '13px 13px 21px 10px rgba(0,0,0,0.8)',
            '-moz-box-shadow': '13px 13px 21px 10px rgba(0,0,0,0.8)',
            boxShadow: '13px 13px 21px 10px rgba(0,0,0,0.8)',
            transitionTimingFunction: 'ease-in-out',
            transitionDuration: '.5s',
            '@media (max-width: 1200px)': {
                height: 275,
                width: 275
            },
            '@media (max-width: 1000px)': {
                height: 250,
                width: 250,
            },
            '@media (max-width: 950px)': {
                maxHeight: '500px',
                maxWidth: '500px',
                height: '100%',
                width: '100%',
                margin: '8%',
                marginTop: '3%',
                // marginLeft: '160px',
                '-webkit-box-shadow': '13px 13px 21px 10px rgba(255,255,255,0.8)',
                '-moz-box-shadow': '13px 13px 21px 10px rgba(255,255,255,0.8)',
                boxShadow: '13px 13px 21px 10px rgba(255,255,255,0.8)',
                'h2': {
                    // display: 'none'
                    opacity: '1',
                    // transitionTimingFunction: 'ease-in-out',
                    // transitionDuration: '.5s',
                },
                'img': {
                    opacity: 1
                }
            },
            '&:hover': {
                '-webkit-box-shadow': '13px 13px 21px 10px rgba(255,255,255,0.8)',
                '-moz-box-shadow': '13px 13px 21px 10px rgba(255,255,255,0.8)',
                boxShadow: '13px 13px 21px 10px rgba(255,255,255,0.8)',
                'h2': {
                    // display: 'none'
                    opacity: '1',
                    // transitionTimingFunction: 'ease-in-out',
                    // transitionDuration: '.5s',
                },
                'img': {
                    opacity: 1
                }
            },
            '@media (max-width: 600px)': {
                width: '400px',
                height: '400px',
                marginTop: '70px'
            },
            '@media (max-width: 470px)': {
                width: '350px',
                height: '350px'
            },
            '@media (max-width: 400px)': {
                width: '300px',
                height: '300px'
            },
            '@media (max-width: 350px)': {
                width: '275px',
                height: '275px'
            },
        })}>
            <img src={image} alt='Modeling Gallery' className={css({ height: '100%', width: '100%', borderRadius: '4px', opacity: .8, transitionTimingFunction: 'ease-in-out', transitionDuration: '.5s',})} />
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
                '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                '@media (max-width: 1000px)': {
                    fontSize: '3rem'
                },
                '@media (max-width: 950px)': {
                    fontSize: '5rem',
                },
                '@media (max-width: 375px)': {
                    fontSize: '3rem'
                },
            })}>Art</h2>
        </div>
    )
}
