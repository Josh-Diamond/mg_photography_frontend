import React, { useState, useEffect } from 'react'
import { css } from 'emotion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdInfoOutline } from 'react-icons/md'
import { TiInfoOutline, TiInfoLarge, TiArrowBack} from 'react-icons/ti'
import { GoInfo } from 'react-icons/go'
import model from '../static/modeling.jpg'
import photography from '../static/photography.jpg'
import art from '../static/art.jpg'
import { FaCalculator } from 'react-icons/fa'
import Thumbnail from '../components/Thumbnail'

export default function Pictures({ history, photos }) {
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selected, setSelected] = useState('')
    const [testObj, setTestObj] = useState({})
    const [testString, setTestString] = useState('https://imgur.com/7KKQR4g')

    // let sliceString = testString.slice(18, testString.length)
    // console.log('sliceString', sliceString)
    // console.log('s.index', selectedIndex)
    // console.log('selectedd', selected)
    const goBack = () => {
        history.goBack()
    }
    useEffect(() => {
      if(photos[0]) {
          let img_url_tail = photos[0].image_url.slice(18, testString.length)
        setSelected(img_url_tail) }
    },[photos])
    console.log('selectedddd', selected)
    const rightPicture = i => {
        // setSelected({ image: })
    }
    
    return (

      
        <div className={ css({
            display: 'flex',
            overflowY: 'hidden',
            boxSizing: 'border-box',
            // '@media (max-width: 1150px)': {
                // display: 'block',
                overflowY: 'hidden',
                maxHeight: '100vh'
            // },
        })}>


        <div className={openMenu ? css({
            display: 'flex',
            width: 'calc(100vw)',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            backgroundColor: '#110C11',
            '@media (max-width: 1125px)': {
              justifyContent: 'center',
            },
            '@media (max-width: 1025px)': {
                width: '100vw',
            },
        }) : css({
            display: 'flex',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
            backgroundColor: '#110C11',
            width: 'calc(100vw)',
            transition: '1s',
            // border: '1px solid red',
            '@media (max-width: 900px)': {
                justifyContent: 'center',
              },
            
        })}>
            <section className={openMenu ? css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                '@media (max-width: 900px)': {
                    display: 'none'
                },
            }) : css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                '@media (max-width: 900px)': {
                    display: 'none'
                },
            })}>
                {/* <MdInfoOutline className={css({
                    fontSize: '2rem',
                    marginTop: '5px'
                })} />
                <GoInfo className={css({
                    fontSize: '2rem',
                    marginTop: '5px'
                })} />
                <TiInfoOutline className={css({
                    fontSize: '2rem',
                    marginTop: '5px'
                })} /> */}
                <TiInfoLarge className={css({
                    fontSize: '2rem',
                    // marginTop: '10px',
                    color: '#e6e6e6',
                    // paddingTop: '5px'
                    transition: '.4s',
                    cursor: 'pointer',
                    '@media (max-width: 1200px)': {
                        fontSize: '1.8rem'
                    },
                    "&:hover": {
                        color: '#41cc66',
                    }
                })} />
                <IoIosArrowBack className={css({
                    fontSize: '6rem',
                    cursor: 'pointer',
                    marginTop: 'calc(50vh - 42px)',
                    color: '#e6e6e6',
                    transition: '.4s',
                    '@media (max-width: 1200px)': {
                        fontSize: '4rem'
                    },
                    "&:hover": {
                        color: '#41cc66',
                    }
                })} />
            </section>
            <section className={css({
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                '@media (max-width: 1150px)': {
                    flexDirection: 'column'
                },
            })}>
                {/* top mobile row */}
                <section className={css({
                    '@media (min-width: 900px)': {
                        display: 'none'
                    },
                    '@media (max-width: 900px)': {
                    // border: '1px solid red',
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    
                    }
                })}>
                <TiInfoLarge className={css({
                        '@media (max-width: 900px)': {
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            color: '#e6e6e6',
                            transition: '.4s',
                            alignSelf: 'flex-end',
                            position: 'relative',
                            // top: '-10px',
                            // left: '10%'
                            paddingBottom: '5px',
                            // paddingLeft: '5px'
                        },
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                        // '@media (max-width: 600px)': {
                        //     top: '-7%'
                        // },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} />
                <AiOutlineMenu className={css({
                        '@media (max-width: 900px)': {
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            color: '#e6e6e6',
                            transition: '.4s',
                            alignSelf: 'flex-end',
                            position: 'relative',
                            // top: '-10px',
                            // left: '10%'
                            paddingBottom: '5px',
                            paddingRight: '5px'
                        },
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                        // '@media (max-width: 600px)': {
                        //     top: '-7%'
                        // },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => setOpenMenu(true)} />
                </section>
               {photos[0] ? 
               <img src={`https://i.imgur.com/${selected}.jpg`} className={css({
                    maxHeight: '100vh',
                    maxWidth: '100vw',
                    '@media (max-width: 1150px)': {
                        alignSelf: 'center'
                    },
                    '@media (max-width: 1150px)': {
                        maxWidth: 'calc(100vw - 128px)'
                        },
                        '@media (max-width: 900px)': {
                            maxWidth: 'calc(100vw)',
                            maxHeight: '90vh'
                            },
                            // '@media (max-width: 600px)': {
                            //     maxWidth: 'calc(100vw)',
                            //     maxHeight: '100vh'
                            //     },
                })} /> :
                <h1 className={css({
                    color: '#41cc66',
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: '7rem',
                    textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
                    '@media (max-width: 450px)': {
                        fontSize: '5rem'
                    },
                })}>Loading...</h1> }
                
                {/* bottom mobile row */}
                <section className={css({
                    // border: '1px solid red',
                    '@media (min-width: 900px)': {
                        display: 'none'
                    },
                    '@media (max-width: 900px)': {
                    width: '100vw',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    }
                })}>
                <IoIosArrowBack className={css({
                        '@media (max-width: 900px)': {
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            color: '#e6e6e6',
                            transition: '.4s',
                            alignSelf: 'flex-end',
                            position: 'relative',
                            // top: '-10px',
                            // left: '10%'
                            paddingTop: '5px',
                            // paddingLeft: '5px'
                        },
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                        // '@media (max-width: 600px)': {
                        //     top: '-7%'
                        // },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} />
                <IoIosArrowForward className={css({
                        '@media (max-width: 900px)': {
                            fontSize: '2.5rem',
                            cursor: 'pointer',
                            color: '#e6e6e6',
                            transition: '.4s',
                            alignSelf: 'flex-end',
                            position: 'relative',
                            // top: '-10px',
                            // left: '10%'
                            paddingTop: '5px',
                            paddingRight: '5px'
                        },
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                        // '@media (max-width: 600px)': {
                        //     top: '-7%'
                        // },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} />
                </section>
                {/* end bottom mobile row */}

            </section>
            <section className={ openMenu ? css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                // borderRight: '3px solid #e6e6e6',
                '@media (max-width: 900px)': {
                    width: '0px',
                    display: 'none',
                },
            }) : css({
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '10px',
                // border: '1px solid red',
                '@media (max-width: 900px)': {
                    display: 'none'
                },
            })}>
                {openMenu ? 
                <AiOutlineClose className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => setOpenMenu(false)} /> :
                    <AiOutlineMenu className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '1.8rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} onClick={() => setOpenMenu(true)} />}
                    <IoIosArrowForward className={css({
                        fontSize: '6rem',
                        cursor: 'pointer',
                        marginTop: 'calc(50vh - 50px)',
                        color: '#e6e6e6',
                        transition: '.4s',
                        '@media (max-width: 1200px)': {
                            fontSize: '4rem'
                        },
                    "&:hover": {
                        color: '#41cc66',
                    }
                    })} />
            </section>
           
        </div>


        {/* menu */}
         {/* menu */}
         <section className={ openMenu ? css({
             width: '300px',
              display: 'flex',
              flexDirection: 'column',
              transition: '1s',
              backgroundColor: '#e6e6e6',
            //   borderLeft: '6px solid #110c11',
              '@media (max-width: 1150px)': {
                width: '0%',
                display: 'none',
                overflowY: 'hidden'
            },
            // '@media (min-width: 1150px)': {
            //     width: '0%',
            //     display: 'none'
            // },
         }) : css({
             width: '0px',
             display: 'flex',
             flexDirection: 'column',
             overflowX: 'hidden',
             transition: '1s',
             '@media (max-width: 1150px)': {
                width: '0%',
                display: 'none'
            },
         })}>
                Menu Area
                <input placeholder='Search' className={css({
                    width: '80%',
                    margin: '0 auto',
                    marginBottom: '10%',
                    "::placeholder": {
                        textAlign: 'center'
                    }
                })} />
                <div className={css({
                    maxHeight: '91vh',
                    overflowY: 'scroll',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                })}>
                    {photos.map((photo, index) => {
                        let sliced_url = photo.image_url.slice(18, testString.length)
                     return <Thumbnail image={sliced_url} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                    })}
                </div>
            </section>

            {/* Mobile Menu */}
            <section className={ openMenu ? css({
             width: '300px',
              display: 'flex',
              background: "radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)",
              flexDirection: 'column',
            //   transition: '1s',
              overflowY: 'hidden',
              maxHeight: '100vh',
            //   '@media (max-width: 1125px)': {
            //     width: '100vw',
            //     height: '100vh',
            //     position: 'relative',
            //     backgroundColor: 'white',
            //     // top: '-100vh',
            //     // overflowY: 'hidden',
            // },
              '@media (max-width: 1150px)': {
                width: '100vw',
                height: '100vh',
                position: 'absolute',
                backgroundColor: 'white',
                // top: '-100vh',
                overflowY: 'hidden',
                // border: '1px solid red',
            },
            '@media (min-width: 1150px)': {
               width: '0%',
               display: 'none',
            opacity: 0
            },
         }) : css({
             width: '0px',
             display: 'flex',
             flexDirection: 'column',
             overflowX: 'hidden',
             transition: '1s',
             '@media (min-width: 1150px)': {
                width: '0%'
             },
             '@media (max-width: 1150px)': {
                opacity: 0,
                display: 'none'
            },
         })}>
                <TiArrowBack onClick={() => setOpenMenu(false)} className={css({
                    fontSize: '2rem',
                    margin: '0 1%'
                })} />
                Menu Area Mobile
                <input placeholder='Search' className={css({
                    width: '80%',
                    margin: '0 auto',
                    marginBottom: '2%',
                    "::placeholder": {
                        textAlign: 'center'
                    }
                })} />
                <div className={css({
                    maxHeight: '91vh',
                    overflowY: 'scroll',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    padding: '0 5%'
                })}>
                    {photos.map((photo, index) => {
                        let sliced_url = photo.image_url.slice(18, testString.length)
                     return <Thumbnail mobile image={sliced_url} setOpenMenu={setOpenMenu} setSelected={setSelected} setSelectedIndex={setSelectedIndex} index={index} />
                    })}
                </div>
            </section>

    </div>
    )
}

///////////////
{/* <div className={css({
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'radial-gradient(circle, rgba(162,255,145,1) 20%, rgba(123,175,62,1) 34%, rgba(210,138,81,1) 74%, rgba(17,88,4,1) 82%)'
        })}>
            <h2 className={css({
                 color: '#41cc66',
                 fontFamily: "'Great Vibes', cursive",
                 fontSize: '7rem',
                 textShadow: '0px 0px 10px rgba(255, 255, 255, 1)',
            })}>Under Construction </h2>
            <h4 className={css({
                fontFamily: "'Great Vibes', cursive",
                fontSize: '5rem',
                paddingTop: '50px',
                textShadow: '0px 0px 10px rgba(255, 255, 255, 1)'
            })}>🚧 🚧 🚧 🚧</h4>
        </div>     */}
        ////////////////////

    // <div className={css({
    //          height: '100vh',
    //          width: '100%'
    //      })}>
    //         <section className={css({
    //             height: '100%',
    //             width: '100%',
    //             boxSizing: 'border-box',
    //             border: '1px solid blue',
    //             display: 'flex',
    //             flexDirection: 'column',
    //             paddingTop: '35px',
    //             backgroundImage: 'url("../static/modeling.jpg")',
    //             backgroundPosition: 'center',
    //             backgroundSize: 'cover'
    //         })}>
    //         {/* <section className='section-test'> */}
    //             <div className={css({
    //                 // border: '1px solid green',
    //                 width: '100%',
    //                 height: '20%',
    //                 display: 'flex',
    //                 justifyContent: 'flex-end',
    //                 alignItems: 'flex-start',
    //             })}>
    //                 {openMenu ? <AiOutlineClose className={css({
    //                     fontSize: '2.5rem',
    //                     paddingRight: '35px',
    //                     cursor: 'pointer'
    //                 })} onClick={() => setOpenMenu(false)} /> :
    //                 <AiOutlineMenu className={css({
    //                     fontSize: '2.5rem',
    //                     cursor: 'pointer',
    //                     paddingRight: '35px',
    //                 })} onClick={() => setOpenMenu(true)} />}
    //             </div>
    //             <div className={css({
    //                 // border: '1px solid green',
    //                 width: '100%',
    //                 height: '60%',
    //                 display: 'flex',
    //                 justifyContent: 'space-between',
    //                 alignItems: 'center'
    //             })}>
    //                 <IoIosArrowBack className={css({
    //                     fontSize: '6rem',
    //                     cursor: 'pointer'
    //                 })} />
    //                 <IoIosArrowForward className={css({
    //                     fontSize: '6rem',
    //                     cursor: 'pointer'
    //                 })} />
    //             </div>
    //             <div className={css({
    //                 // border: '1px solid green',
    //                 width: '100%',
    //                 height: '20%',
    //                 display: 'flex',
    //                 flexDirection: 'column',
    //                 alignItems: 'flex-start',
    //                 justifyContent: 'flex-end',
    //                 backgroundImage: '-webkit-linear-gradient(bottom, rgba(16,16,16,0.75), rgba(16,16,16,0.25) 80%, rgba(16,16,16,0))'
    //             })}>
    //                 <h2 className={css({
    //                     fontSize: '1.7rem',
    //                     paddingLeft: '35px',
    //                 })}>Heading Heading Heading Heading</h2>
    //                 <h4 className={css({
    //                     fontSize: '1.25rem',
    //                     paddingTop: '15px',
    //                     paddingLeft: '35px',
    //                     paddingBottom: '35px'
    //                 })}>Sub-heading Sub-heading Sub-heading Sub-heading</h4>
    //             </div>
    //         </section>
    //         <section>

    //         </section>
    //     </div>


    //////////////////////////////////
    // fullscreen
    // <div className={css({
    //     display: 'flex',
    //     width: '100%',
    //     justifyContent: 'space-between',
    //     boxSizing: 'border-box',
    // })}>
    //     <section className={css({
    //         border: '1px solid red',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center'
    //     })}>
    //         {/* <MdInfoOutline className={css({
    //             fontSize: '2rem',
    //             marginTop: '5px'
    //         })} />
    //         <GoInfo className={css({
    //             fontSize: '2rem',
    //             marginTop: '5px'
    //         })} />
    //         <TiInfoOutline className={css({
    //             fontSize: '2rem',
    //             marginTop: '5px'
    //         })} /> */}
    //         <TiInfoLarge className={css({
    //             fontSize: '2rem',
    //             marginTop: '5px'
    //         })} />
    //         <IoIosArrowBack className={css({
    //             fontSize: '6rem',
    //             cursor: 'pointer',
    //             marginTop: 'calc(50vh)'
    //         })} />
    //     </section>
    //     <section className={css({
    //         boxSizing: "border-box",
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         height: '100vh'
    //     })}>
    //         <img src={art} className={css({
    //             maxHeight: '100vh',
    //             maxWidth: '100vw',
    //         })} />
    //     </section>
    //     <section className={css({
    //         border: '1px solid red',
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //     })}>
    //         {openMenu ? <AiOutlineClose className={css({
    //                 fontSize: '2.5rem',
    //                 cursor: 'pointer'
    //             })} onClick={() => setOpenMenu(false)} /> :
    //             <AiOutlineMenu className={css({
    //                 fontSize: '2.5rem',
    //                 cursor: 'pointer'
    //             })} onClick={() => setOpenMenu(true)} />}
    //             <IoIosArrowForward className={css({
    //                 fontSize: '6rem',
    //                 cursor: 'pointer',
    //                 marginTop: 'calc(50vh - 40px)'
    //             })} />
    //     </section>
    // </div>




    ///////////////////////

    // most recent

//     <div className={ openMenu ? css({
//         display: 'flex',
//     }): css({
//         height: '100vh',
//         overflow: 'hidden',
//     }) }>


//     <div className={openMenu ? css({
//         display: 'flex',
//         width: 'calc(100vw - 300px)',
//         justifyContent: 'space-between',
//         boxSizing: 'border-box',
//         backgroundColor: '#110C11',
//         transition: '.2s'
//     }) : css({
//         display: 'flex',
//         justifyContent: 'space-between',
//         boxSizing: 'border-box',
//         backgroundColor: '#110C11',
//         width: 'calc(100vw)',
//         transition: '2s'
//     })}>
//         <section className={css({
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '10px'
//         })}>
//             {/* <MdInfoOutline className={css({
//                 fontSize: '2rem',
//                 marginTop: '5px'
//             })} />
//             <GoInfo className={css({
//                 fontSize: '2rem',
//                 marginTop: '5px'
//             })} />
//             <TiInfoOutline className={css({
//                 fontSize: '2rem',
//                 marginTop: '5px'
//             })} /> */}
//             <TiInfoLarge className={css({
//                 fontSize: '2rem',
//                 // marginTop: '10px',
//                 color: '#e6e6e6',
//                 // paddingTop: '5px'
//             })} />
//             <IoIosArrowBack className={css({
//                 fontSize: '6rem',
//                 cursor: 'pointer',
//                 marginTop: 'calc(50vh - 42px)',
//                 color: '#e6e6e6'
//             })} />
//         </section>
//         <section className={css({
//             boxSizing: "border-box",
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100vh'
//         })}>
//             <img src={selected} className={css({
//                 maxHeight: '100vh',
//                 maxWidth: '100vw'
//             })} />
//         </section>
//         <section className={css({
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             marginTop: '10px'
//         })}>
//             {openMenu ? <AiOutlineClose className={css({
//                     fontSize: '2.5rem',
//                     cursor: 'pointer',
//                     color: '#e6e6e6'
//                 })} onClick={() => setOpenMenu(false)} /> :
//                 <AiOutlineMenu className={css({
//                     fontSize: '2.5rem',
//                     cursor: 'pointer',
//                     color: '#e6e6e6'
//                 })} onClick={() => setOpenMenu(true)} />}
//                 <IoIosArrowForward className={css({
//                     fontSize: '6rem',
//                     cursor: 'pointer',
//                     marginTop: 'calc(50vh - 50px)',
//                     color: '#e6e6e6'
//                 })} />
//         </section>
       
//     </div>


//     {/* menu */}
//      {/* menu */}
//      <section className={ css({
//          width: '300px',
//          border: '1px solid orange',
//          display: 'flex',
//          flexDirection: 'column',
//         //  transition: '2s'
//      })}>
//             Menu Area
//             <input placeholder='Search' className={css({
//                 width: '80%',
//                 margin: '0 auto',
//                 marginBottom: '10%',
//                 "::placeholder": {
//                     textAlign: 'center'
//                 }
//             })} />
//             <div className={css({
//                 maxHeight: '91vh',
//                 overflowY: 'scroll',
//                 boxSizing: 'border-box',
//                 display: 'flex',
//                 flexWrap: 'wrap',
//                 justifyContent: 'space-evenly',
//                 alignItems: 'center'
//             })}>
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//                 <Thumbnail image={model} setSelected={setSelected} />
//                 <Thumbnail image={photography} setSelected={setSelected} />
//                 <Thumbnail image={art} setSelected={setSelected} />
//             </div>
//         </section>

// </div>