import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate(); 

    const handleHomeDesignClick = () => {
        navigate("/projects");
    };

    return (
        <>
            <div className="containerHome" onClick={handleHomeDesignClick}>
            <h1 className="nameStyle">PORTFOLIO</h1>
            <h1 className="nameStyle">JORGE LUIS MARTIN LORENZO</h1>
                <div className="homeDesign">
                    
                </div>
            </div>
        </>
    )
}