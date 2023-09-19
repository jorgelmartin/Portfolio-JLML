import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate(); 

    // GO TO PROJECTS PAGE BY CLIC
    const handleHomeDesignClick = () => {
        navigate("/projects");
    };

    return (
        <>
        {/* HOME PAGE */}
            <div className="containerHome" onClick={handleHomeDesignClick}>
            <h1 className="nameStyle">PORTFOLIO</h1>
            <h1 className="nameStyle">JORGE LUIS MARTIN LORENZO</h1>
                <div className="homeDesign">
                </div>
            </div>
        </>
    )
}