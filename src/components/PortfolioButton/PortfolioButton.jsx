import React from "react";
import './PortfolioButton.css';

export const PortfolioButton = ({ onClick, imageSrc, text, href }) => {

    return (
        <>
<div className='borderAnother'>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <button className="AnotherButton" onClick={onClick}>
                    {text}
                    {imageSrc && <img src={imageSrc} alt="" className="ButtonImage" style={{ maxWidth: '1.5em', maxHeight: '1.5em' }}/>}
                </button>
            </a></div>
        </>
    )
}