import React, { useState } from 'react'
import { css } from 'emotion'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Pictures({ history }) {
    const [openMenu, setOpenMenu] = useState(false)
    const goBack = () => {
        history.goBack()
    }
    return (
         <div className={css({
             height: '100vh',
             width: '100%'
         })}>
            <section className={css({
                height: '100%',
                width: '100%',
                boxSizing: 'border-box',
                border: '1px solid blue',
                display: 'flex',
                flexDirection: 'column',
                padding: '35px'
            })}>
                <div className={css({
                    // border: '1px solid green',
                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                })}>
                    {openMenu ? <AiOutlineClose className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer'
                    })} onClick={() => setOpenMenu(false)} /> :
                    <AiOutlineMenu className={css({
                        fontSize: '2.5rem',
                        cursor: 'pointer'
                    })} onClick={() => setOpenMenu(true)} />}
                </div>
                <div className={css({
                    // border: '1px solid green',
                    width: '100%',
                    height: '60%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                })}>
                    <IoIosArrowBack className={css({
                        fontSize: '6rem',
                        cursor: 'pointer'
                    })} />
                    <IoIosArrowForward className={css({
                        fontSize: '6rem',
                        cursor: 'pointer'
                    })} />
                </div>
                <div className={css({
                    // border: '1px solid green',
                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end'
                })}>
                    <h2 className={css({
                        fontSize: '1.7rem'
                    })}>Heading Heading Heading Heading</h2>
                    <h4 className={css({
                        fontSize: '1.25rem',
                        paddingTop: '15px'
                    })}>Sub-heading Sub-heading Sub-heading Sub-heading</h4>
                </div>
            </section>
            <section>

            </section>
        </div>
    )
}
