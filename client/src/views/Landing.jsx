import React from 'react'
import { css } from 'emotion'
import twitter from '../static/twitter.png'

export default function Landing() {
    return (
        <body className={css({
            color: 'rgb(65, 79, 87)',
    fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
    fontSize: '14pt',
    fontWeight: 300,
    lineHeight: 2,
    letterSpacing: '0.2rem',
    textTransform: 'uppercase'
        })}>
            <div className={css({
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                perspective: '1000px',
                position: 'relative',
                minHeight: '100%',
                zIndex: 2,
                padding: '1.5rem',
                height: '94.72vh',
                border: '1px solid blue',
                background: 'rgb(162,255,145)',
			    background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)'
            })}>
                <section className={css({
                    transformOrigin: '50% 50%',
                    transform: 'rotateX(0deg)',
                    cursor: 'default',
                    maxWidth: '100%',
                    opacity: 0.95,
                    position: 'relative',
                    textAlign: 'center',
                    width: '27rem',
                    transition: 'opacity 1s ease 0s, transform 1s ease 0s',
                    padding: '4.5rem 3rem 3rem',
                    background: 'rgb(255, 255, 255)',
                    borderRadius: '4px'
                })}>
                    <header className={css({
                        display: 'block',
                        verticalAlign: 'baseline',
                        margin: '0px',
                        padding: '0px',
                        borderWidth: '0px',
                        borderStyle: 'initial',
                        borderColor: 'initial',
                        borderImage: 'initial',
                        font: 'inherit'
                    })}>
                        <span className={css({
                            position: 'relative',
                            display: 'block',
                            marginBottom: '1.5rem',
                        })}>
                            <span className={css({
                                boxSizing: 'border-box',
                                display: 'block',
                                position: 'absolute',
                                top: '50%',
                                left: '-3rem',
                                width: 'calc(100% + 6rem)',
                                height: '1px',
                                zIndex: -1,
                                background: 'rgb(200, 204, 207)'
                            })} />
                            <img src='https://imgur.com/DQgxOcS.jpg' alt='profile picture' className={css({
                                width: '250px',
                                display: 'block',
                                boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1.5rem',
                                margin: '0px auto',
                                borderRadius: '100%'
                            })} />
                        </span>
                        <h1 className={css({
                            fontSize: '1.85rem',
                            letterSpacing: '0.22rem',
                            margin: '0px 0px 0.525rem'
                        })}>
                            Marysa Garcia
                        </h1>
                        <p className={css({
                            margin: '0px 0px 1.5rem',
                            display: 'block',
                            marginBlockStart: '1rem',
                            marginBlockEnd: '1rem',
                            marginInlineStart: '0px',
                            marginInlineEnd: '0px'
                        })}>
                            Model | Photographer | Artist
                        </p>
                    </header>
                    <ul className={css({ 
                        margin: '0 auto',
                        width: '100%',
                        marginLeft: '0px',
                        display: 'flex',
                        // cursor: 'default',
                        paddingLeft: '0px',
                        listStyle: 'none',
                        // marginBlockStart: '1rem',
                        // marginBlockEnd: '1rem',
                        // marginInlineStart: '0px',
                        // marginInlineEnd: '0px',
                        // paddingInlineStart: '40px',
                        textSlign: 'center',
                        
                    })}> 
                        <li className={css({
                            margin: '0 auto',
                            paddingLeft: '0px',
                            verticalAlign: 'middle',
                            padding: '0px 0px 0px 0.75rem',
                            display: 'list-item',
                            textAlign: '-webkit-match-parent'
                        })}>
                            <a className={css({
                                '-webkit-appearance': 'none',
                                display: 'inline-block',
                                height: '2.75rem',
                                lineHeight: '2.75rem',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                                color: 'rgb(65, 79, 87) !important',
                                transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                padding: '0px 1.5rem',
                                borderRadius: '4px',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: 'rgb(200, 204, 207)',
                                borderImage: 'initial',
                                textDecoration: 'none',
                                "&:hover": {
                                    color: '#ff7496 !important',
                                    border: '1px solid #ff7496 !important'
                                }
                            })}>View Gallery</a>
                        </li>
                    </ul>
                    <footer className={css({
                        display: 'block',
                        verticalAlign: 'baseline',
                        margin: '0px',
                        padding: '0px',
                        borderWidth: '0px',
                        borderStyle: 'initial',
                        borderColor: 'initial',
                        borderImage: 'initial',
                        font: 'inherit'
                    })}>
                        <ul className={css({
                            cursor: 'default',
                            paddingLeft: '0px',
                            marginTop: '-0.675rem',
                            listStyle: 'none',
                            margin: '0px 0px 1.5rem'
                        })}>
                            <li className={css({
                                display: 'inline-block',
                                padding: '0.675rem 0.5rem',
                            })}>
                                <a className={css({
                                    position: 'relative',
                                    display: 'block',
                                    width: '3.75rem',
                                    height: '3.75rem',
                                    lineHeight: '3.75rem',
                                    textAlign: 'center',
                                    textIndent: '3.75rem',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                    borderRadius: '100%',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: 'rgb(200, 204, 207)',
                                    borderImage: 'initial',
                                    overflow: 'hidden'
                                })}>
                                    
                                </a>
                            </li>
                            <li className={css({
                                display: 'inline-block',
                                padding: '0.675rem 0.5rem',
                            })}>
                                <a className={css({
                                    position: 'relative',
                                    display: 'block',
                                    width: '3.75rem',
                                    height: '3.75rem',
                                    lineHeight: '3.75rem',
                                    textAlign: 'center',
                                    textIndent: '3.75rem',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                    borderRadius: '100%',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: 'rgb(200, 204, 207)',
                                    borderImage: 'initial',
                                    overflow: 'hidden'
                                })}>

                                </a>
                            </li>
                            <li className={css({
                                display: 'inline-block',
                                padding: '0.675rem 0.5rem',
                            })}>
                                <a className={css({
                                    position: 'relative',
                                    display: 'block',
                                    width: '3.75rem',
                                    height: '3.75rem',
                                    lineHeight: '3.75rem',
                                    textAlign: 'center',
                                    textIndent: '3.75rem',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                    borderRadius: '100%',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: 'rgb(200, 204, 207)',
                                    borderImage: 'initial',
                                    overflow: 'hidden'
                                })}>

                                </a>
                            </li>
                        </ul>
                    </footer>
                </section>
            </div>
        </body>
    )
}
