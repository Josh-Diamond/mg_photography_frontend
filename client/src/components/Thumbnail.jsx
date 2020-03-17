import React from 'react'
import { css } from 'emotion'

export default function Thumbnail({ image, setSelected }) {
    return (
        <div onClick={() => setSelected(image)} className={css({
            cursor: 'pointer',
            boxSizing: 'border-box',
            opacity: .8,
            "&:hover": {
                opacity: 1
            }
        })}>
            <img src={image} className={css({
                maxWidth: '100px',
                // opacity: '.8'
                // height: '125px'
            })} />
        </div>
    )
}
