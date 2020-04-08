import React from 'react'
import { css } from 'emotion'
import { TiInfoLarge } from 'react-icons/ti'
import { FaRegEdit } from 'react-icons/fa'
import { MdDeleteForever } from 'react-icons/md'

export default function ManageCard({ photo, image }) {
    return (
        <div className={css({
            width: '220px',
            height: '255px',
            borderRadius: '5px',
            backgroundColor: '#110C11',
            '-webkit-box-shadow': '0px 0px 35px 2px rgba(230,230,230,1)',
        '-moz-box-shadow': '0px 0px 35px 2px rgba(230,230,230,1)',
        boxShadow: '0px 0px 35px 2px rgba(230,230,230,1)',
        })}>
            <img src={`https://i.imgur.com/${image}.jpg`} className={css({
                maxHeight: '200px',
                maxWidth: '200px',
                borderRadius: '5px',
                marginTop: '10px'
            })}  />
            <section className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                height: '35px'
            })}>
                <TiInfoLarge className={css({
                    fontSize: '1.8rem',
                    color: '#e6e6e6',
                    transition: '.4s',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#41cc66',
                    }
                })} />
                <FaRegEdit className={css({
                    fontSize: '1.5rem',
                    color: '#e6e6e6',
                    transition: '.4s',
                    cursor: 'pointer',
                    '&:hover': {
                        color: '#41cc66',
                    }
                })} />
                {/* <MdDelete /> */}
                <MdDeleteForever className={css({
                    fontSize: '1.8rem',
                    color: '#e6e6e6',
                    transition: '.4s',
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'red',
                    }
                })} />
            </section>
        </div>
    )
}
