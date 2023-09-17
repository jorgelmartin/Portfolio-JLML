import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate(); // Obtiene la función de navegación

    const handleHomeDesignClick = () => {
        // Redirige al usuario a la página Projects al hacer clic en homeDesign
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