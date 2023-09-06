import React from "react";
import './Contact.css'

export const Contact = () => {
    return (
        <div className="containerContact">
            
            <div className="contactData">
            <h2>Contact</h2>
                <p>Jorge Luis Martin Lorenzo</p>
                <p>Full Stack Developer</p>
                <p>Valencia, Spain</p>
                <p>jorgemctin@gmail.com</p>
                {/* <p>Teléfono: +123 456 7890</p> */}
                <p>LinkedIn: <a href="https://www.linkedin.com/in/tu-perfil-linkedin" target="_blank" rel="noopener noreferrer">Tu Perfil LinkedIn</a></p>
                <p>GitHub: <a href="https://github.com/tu-usuario-github" target="_blank" rel="noopener noreferrer">Tu Usuario GitHub</a></p>
            </div>
        </div>
    );
};
