import React from 'react';
import "./Header.css";
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='headerDesign'>
                <div className="headerLink">
                    <div className="headerLinks" onClick={() => navigate("/projects")}>Projects</div>
                    <div className="headerLinks" onClick={() => navigate("/student")}>AboutMe</div>
                    <div className="headerLinks" onClick={() => navigate("/student")}>Stack</div>
                    <div className="headerLinks" onClick={() => navigate("/student")}>Contact</div>
                </div>
            </div>
        </>
    )
};