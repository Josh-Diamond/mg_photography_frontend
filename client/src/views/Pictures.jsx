import React, { useState } from 'react'
import { css } from 'emotion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdInfoOutline } from 'react-icons/md'
import { TiInfoOutline, TiInfoLarge} from 'react-icons/ti'
import { GoInfo } from 'react-icons/go'
import model from '../static/modeling.jpg'
import photography from '../static/photography.jpg'
import art from '../static/art.jpg'
import { FaCalculator } from 'react-icons/fa'
import Thumbnail from '../components/Thumbnail'

export default function Pictures({ history }) {
    const [openMenu, setOpenMenu] = useState(true)
    const [selected, setSelected] = useState(model)

    const goBack = () => {
        history.goBack()
    }

    return (

      
        <div className={css({
            border: '1px solid blue',
            display: 'flex'
        })}>


        <div className={css({
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
        })}>
            <section className={css({
                border: '1px solid red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
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
                    marginTop: '5px'
                })} />
                <IoIosArrowBack className={css({
                    fontSize: '6rem',
                    cursor: 'pointer',
                    marginTop: 'calc(50vh)'
                })} />
            </section>
            <section className={css({
                boxSizing: "border-box",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            })}>
                <img src={selected} className={css({
                    maxHeight: '100vh',
                    maxWidth: '100vw',
                })} />
            </section>
            <section className={css({
                border: '1px solid red',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            })}>
                {openMenu ? <AiOutlineClose className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer'
                    })} onClick={() => setOpenMenu(false)} /> :
                    <AiOutlineMenu className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer'
                    })} onClick={() => setOpenMenu(true)} />}
                    <IoIosArrowForward className={css({
                        fontSize: '6rem',
                        cursor: 'pointer',
                        marginTop: 'calc(50vh - 40px)'
                    })} />
            </section>
           
        </div>


        {/* menu */}
         {/* menu */}
         <section className={ openMenu ? css({
                maxWidth: '25%',
                minWidth: '250px',
                border: '1px solid orange',
                display: 'flex',
                flexDirection: 'column'
            }) : css({
                display: 'none'
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
                    maxHeight: '95vh',
                    overflowY: 'scroll',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                })}>
                    <Thumbnail image={model} setSelected={setSelected} />
                    <Thumbnail image={photography} setSelected={setSelected} />
                    <Thumbnail image={art} setSelected={setSelected} />
                    <Thumbnail image={model} setSelected={setSelected} />
                    <Thumbnail image={photography} setSelected={setSelected} />
                    <Thumbnail image={art} setSelected={setSelected} />
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