import React from 'react'
import { css } from 'emotion'
import ReactBnbGallery from 'react-bnb-gallery'

export default function Popup() {
    return (
        <div className={css({
            position: 'fixed',
            zIndex: 7,
            color: 'darkred',
            width: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            backgroundColor: 'rgba(0,0,0, 0.3)'
        })}>
            <div className={css({
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 20px',
                position: 'absolute',
                left: '36%',
                right: '36%',
                top: '38%',
                bottom: '38%',
                margin: 'auto',
                backgroundColor: 'white'
            })}>
                <h4>POPUPINFO</h4>
                <h4>POPUPINFO</h4>
                <h4>POPUPINFO</h4>
                <h4>POPUPINFO</h4>
            </div>
        </div>
    )
}
