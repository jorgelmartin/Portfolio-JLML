import React from "react";
import './Contact.css'
import { PortfolioButton } from "../../components/PortfolioButton/PortfolioButton";

export const Contact = () => {
    return (
        <div className="containerContact">

            <div className="contactData">
            
            
                <div className="dataData"><strong>
                {/* <h3 style={{
                    transform:'none',

                }}>Contact</h3> */}
                <p>Jorge Luis Martin Lorenzo</p>
                <p>Full Stack Developer</p>
                <p>Valencia, Spain</p>
                <p>jorgemctin@gmail.com</p>
                {/* <p>Teléfono: +123 456 7890</p> */}
                </strong>
     
            </div></div>
            <div className="buttonsContact">
                
            <PortfolioButton
                    href={"https://www.linkedin.com/in/jorge-luis-martin-lorenzo/"}
                    text={"LinkedIn"}
                    imageSrc={""}
                />
                <PortfolioButton
                    href={"https://github.com/jorgemctin"}
                    text={"GitHub"}
                    imageSrc={""}
                />
                {/* <PortfolioButton
                    href={"src/assets/Jorge"}
                    text={"CV"}
                    imageSrc={""}
                /> */}
                </div>
        </div>
    );
};
