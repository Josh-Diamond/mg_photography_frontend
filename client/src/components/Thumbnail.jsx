import React from 'react'
import { css } from 'emotion'

export default function Thumbnail({ image, setSelected, mobile }) {
    return (
        <div onClick={() => setSelected(image)} className={css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            opacity: .8,
            "&:hover": {
                opacity: 1
            },
            '@media (max-width: 1025px)': {
                padding: '1%',
            },
        })}>
            <img src={image} className={ mobile ? css({
                maxWidth: '200px',
                '@media (max-width: 600px)': {
                    maxWidth: '98%'
                },
            }) : css({
                maxWidth: '100px',
                // opacity: '.8'
                // height: '125px'
            })} />
        </div>
    )
}
