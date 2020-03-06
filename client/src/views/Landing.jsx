import React, { useEffect } from 'react'
import { css } from 'emotion'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import axios from 'axios'

export default function Landing() {
    useEffect(() => {
        axios.get('')
    }, [])
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
                // height: '100%',
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
                    padding: '3rem 3rem 3rem',
                    background: 'rgb(255, 255, 255)',
                    borderRadius: '4px',
                    height: '575px',
                    backgroundColor: '#f0fce3',
                    '@media (max-width: 550px)': {
                        width: '75%',
                        height: '550px',
                        marginTop: '12%'
                    },
                    '@media (max-width: 470px)': {
                        width: '75%',
                        height: '600px'
                    },
                    '@media (max-width: 380px)': {
                        width: '75%',
                        height: '550px'
                    },
                    '@media (max-width: 344px)': {
                        width: '75%',
                        height: '525px'
                    }
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
                            '@media (max-width: 400px)': {
                                width: '100%',
                                maxWidth: '250px'
                            },
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
                                background: 'rgb(200, 204, 207)',
                                border: '1px solid #543313',
                            })} />
                            <img src='https://imgur.com/M6HKdFI.jpg' alt='profile picture' className={css({
                                width: '250px',
                                display: 'block',
                                // boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1.5rem',
                                boxShadow: '#7d6247 0px 0px 0px 1.5rem',
                                margin: '0px auto',
                                borderRadius: '100%',
                                '@media (max-width: 400px)': {
                                    width: '100%',
                                    maxWidth: '250px'
                                },
                            })} />
                        </span>
                        <h1 className={css({
                            fontSize: '3.5rem',
                            letterSpacing: '0.22rem',
                            margin: '0px 0px .525rem',
                            fontWeight: 100,
                            color: '#543313',
                            // color: 'rgb(65, 79, 87)',
                            // fontFamily: "'Parisienne', cursive",
                            fontFamily: "'Great Vibes', cursive",
                            // fontFamily: "'Sacramento', cursive",
                            // fontFamily: "'Dancing Script', cursive",
                            // fontFamily: "'Indie Flower', cursive",
                            // fontFamily: "'Rock Salt', cursive", /* favorite */
                            // fontFamily: "'Amatic SC', cursive",
                            textTransform: 'none',
                            '@media (max-width: 505px)': {
                                fontSize: '3.1rem'
                            },
                            '@media (max-width: 470px)': {
                                fontSize: '2.1rem'
                            },
                            '@media (max-width: 350px)': {
                                fontSize: '1.8rem'
                            },
                        })}>
                            {/* Marysa <span className={css({ color: '#41cc66'})}>Garcia</span> */}
                            Marysa Garcia
                        </h1>
                        <p className={css({
                            margin: '0px 0px 1.5rem',
                            display: 'block',
                            marginBlockStart: '.5rem',
                            marginBlockEnd: '1.5rem',
                            marginInlineStart: '0px',
                            marginInlineEnd: '0px',
                            fontWeight: 'lighter',
                            color: '#7d6247',
                            '@media (max-width: 550px)': {
                                fontSize: '.8rem'
                            },
                            '@media (max-width: 470px)': {
                                fontSize: '.8rem'
                            }
                        })}>
                            Model <br className={css({
                                display: 'none',
                                '@media (max-width: 470px)': {
                                    display: 'initial'
                                }
                            })} /> <span className={css({ color: 'rgb(200,204,207)', '@media (max-width: 470px)': {
                                display: 'none'
                            }})}>|</span> Photographer <br className={css({
                                display: 'none',
                                '@media (max-width: 470px)': {
                                    display: 'initial'
                                }
                            })} /> <span className={css({ color: 'rgb(200,204,207)', '@media (max-width: 470px)': {
                                display: 'none'
                            }})}>|</span> Artist
                        </p>
                    </header>
                    <ul className={css({ 
                        margin: '0px 0px 1.5rem',
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
                            textAlign: '-webkit-match-parent',
                            '@media (max-width: 385px)': {
                                padding: '0px 0px 0px 0px'  
                            },
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
                                color: '#7d6247 !important',
                                transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                padding: '0px 1.5rem',
                                borderRadius: '4px',
                                borderWidth: '1px',
                                borderStyle: 'solid',
                                borderColor: '#40310d',
                                borderImage: 'initial',
                                textDecoration: 'none',
                                "&:hover": {
                                    // color: '#ff7496 !important',
                                    // border: '1px solid #ff7496 !important'
                                    color: '#41cc66 !important',
                                    border: '1px solid #41cc66 !important'
                                },
                                '@media (max-width: 470px)': {
                                    width: '75%',
                                    margin: '0 auto',
                                    fontSize: '.9rem',
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
                                padding: '0.675rem 0.5rem'
                            })}>
                                <a href='https://instagram.com/marysa_alexis?igshid=1abwouwwzi9xt' className={css({
                                    position: 'relative',
                                    // display: 'block',
                                    width: '3.75rem',
                                    height: '3.75rem',
                                    lineHeight: '3.75rem',
                                    textAlign: 'center',
                                    textIndent: '.4rem',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                    borderRadius: '100%',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#40310d',
                                    borderImage: 'initial',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: '#ab5a1b',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    '&:hover': {
                                        // color: '#ff7496 !important',
                                        // border: '1px solid #ff7496 !important'
                                        color: '#41cc66 !important',
                                        border: '1px solid #41cc66 !important'
                                    },
                                    '@media (max-width: 385px)': {
                                        width: '3rem',
                                        height: '3rem' 
                                    }                         
                                })}>
                                    <FaInstagram className={css({
                                        fontSize: '2rem',
                                        color: 'inherit'
                                    })} />
                                </a>
                            </li>
                            <li className={css({
                                display: 'inline-block',
                                padding: '0.675rem 0.5rem',
                            })}>
                                <a href='https://www.facebook.com/profile.php?id=100006888631286' className={css({
                                    position: 'relative',
                                    // display: 'block',
                                    width: '3.75rem',
                                    height: '3.75rem',
                                    lineHeight: '3.75rem',
                                    textAlign: 'center',
                                    textIndent: '.4rem',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                    borderRadius: '100%',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#40310d',
                                    borderImage: 'initial',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: '#ab5a1b',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    '&:hover': {
                                        // color: '#ff7496 !important',
                                        // border: '1px solid #ff7496 !important',
                                        color: '#41cc66 !important',
                                        border: '1px solid #41cc66 !important'
                                    },
                                    '@media (max-width: 385px)': {
                                        width: '3rem',
                                        height: '3rem' 
                                    }                              
                                })}>
                                    <FaFacebook className={css({
                                        fontSize: '2rem',
                                        color: 'inherit'
                                    })} />
                                </a>
                            </li>
                            <li className={css({
                                display: 'inline-block',
                                padding: '0.675rem 0.5rem',
                            })}>
                                <a href="mailto:marysaartisticintrigue@gmail.com" className={css({
                                    position: 'relative',
                                    // display: 'block',
                                    width: '3.75rem',
                                    height: '3.75rem',
                                    lineHeight: '3.75rem',
                                    textAlign: 'center',
                                    textIndent: '.4rem',
                                    whiteSpace: 'nowrap',
                                    textDecoration: 'none',
                                    borderRadius: '100%',
                                    borderWidth: '1px',
                                    borderStyle: 'solid',
                                    borderColor: '#40310d',
                                    borderImage: 'initial',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: '#ab5a1b',
                                    transition: 'background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s',
                                    '&:hover': {
                                        // color: '#ff7496 !important',
                                        // border: '1px solid #ff7496 !important'
                                        color: '#41cc66 !important',
                                        border: '1px solid #41cc66 !important'
                                    }, '@media (max-width: 385px)': {
                                        width: '3rem',
                                        height: '3rem' 
                                    }                                  
                                })}>
                                    <AiOutlineMail className={css({
                                        fontSize: '2rem',
                                        color: 'inherit'
                                    })} />
                                </a>
                            </li>
                        </ul>
                    </footer>
                </section>
                <footer className={css({
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    width: '100%',
                    color: 'rgba(255, 255, 255, 0.75)',
                    cursor: 'default',
                    textAlign: 'center',
                    padding: '1.5rem 0px 0px',
                    display: 'block',
                    verticalAlign: 'baseline',
                    margin: '0px',
                    borderWidth: '0px',
                    borderStyle: 'initial',
                    borderColor: 'initial',
                    borderImage: 'initial',
                    font: 'inherit'
                })}>
                    <ul className={css({
                        fontSize: '0.9rem',
                        margin: '0px',
                        padding: '0px',
                        listStyle: 'none'
                    })}>
                        <li className={css({
                            borderLeft: '0px',
                            display: 'inline-block',
                            lineHeight: 1,
                            margin: '0px 0px 0px 0.45rem',
                            padding: '0px 0px 0px 0.85rem'
                        })}>
                            © Marysa Garcia
                        </li>
                        <li className={css({
                            display: 'inline-block',
                            lineHeight: 1,
                            margin: '0px 0px 0px 0.45em',
                            padding: '0px 0px 0px 0.85rem',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.5)'
                        })}>
                            2020
                        </li>
                    </ul>
                </footer>
            </div>
        </body>
    )
}
