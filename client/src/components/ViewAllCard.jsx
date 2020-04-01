import React from 'react'
import { css } from 'emotion'

export default function ViewAllCard() {
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
                height: 200,
                width: 200,
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
                'div': {
                    opacity: 1
                }
            }
            
        })}>
            <div className={css({ height: '100%', width: '100%', borderRadius: '4px', opacity: .8, transitionTimingFunction: 'ease-in-out', transitionDuration: '.5s', backgroundColor: '#110C11'})} />
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

                // Green Text
                // fontFamily: "'Great Vibes', cursive",
                //             fontWeight: 'bold',
                //             // marginLeft: '1%',
                //             textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                //             color: '#41cc66',
                //             // fontSize: '1.5rem',
                //             // marginTop: '7px',
                
                '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                '@media (max-width: 1000px)': {
                    fontSize: '3rem'
                },
                '@media (max-width: 375px)': {
                    fontSize: '3rem'
                },
            })}>View All</h2>
        </div>
    )
}