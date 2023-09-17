import React from 'react';
import "./Header.css";
import { useLocation, useNavigate } from 'react-router-dom';

//HEADER COMPONENT
export const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // IF THE USER IS AT HOME PAGE, DON'T SHOW HEADER COMPONENT
    const isHome = location.pathname === '/';
    if (isHome) {
        return null;
    }

    // CHECKING WHERE IS THE USER LOCATED AND PAINTING THE TEXT 
    const isProjects = location.pathname === '/projects';
    const projectsStyle = isProjects ? { color: 'rgb(96, 96, 96)', textShadow: '0 0.08em 0.08em blue' } : {};

    const isStack = location.pathname === '/stack';
    const stackStyle = isStack ? { color: 'rgb(96, 96, 96)', textShadow: '0 0.08em 0.08em green' } : {};

    const isContact = location.pathname === '/contact';
    const contactStyle = isContact ? { color: 'rgb(96, 96, 96)', textShadow: '0 0.08em 0.08em yellow' } : {};


    return (
        <>
            <div className='headerDesign'>
                <div className="headerLink">
                    <div className="headerLinks" style={projectsStyle} onClick={() => navigate("/projects")}><strong>Projects</strong></div>
                    {/* <div className="headerLinks" onClick={() => navigate("/student")}>AboutMe</div> */}
                    <div className="headerLinks" style={stackStyle} onClick={() => navigate("/stack")}><strong>Stack</strong></div>
                    <div className="headerLinks" style={contactStyle} onClick={() => navigate("/contact")}><strong>Contact</strong></div>
                </div>
            </div>
        </>
    )
};