import React from "react";
import './PortfolioButton.css';

//PORTFOLIO BUTTON
export const PortfolioButton = ({ onClick, imageSrc, text, href }) => {
    return (
        <div>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <button className="ButtonPortfolio" onClick={onClick}>
                    {text}
                    {imageSrc && <img src={imageSrc} alt="" className="ButtonImage" style={{ maxWidth: '1.5em', maxHeight: '1.5em' }} />}
                </button>
            </a>
        </div>
    )
}