import React from 'react'
import { css } from 'emotion'

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
                border: '1px solid blue'
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
                    borderRadius: '4px',
                    border: '1px solid red'
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
                </section>
            </div>
        </body>
    )
}
