import React, { useState } from "react";
import "./Contact.css";
import { PortfolioButton } from "../../components/PortfolioButton/PortfolioButton";
import { LanguageModal } from "../../components/LanguageModal/LanguageModal";

export const Contact = () => {
    const [showModal, setShowModal] = useState(false);

    //HANDLE MODAL OF LANGUAGES CV
    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (

        //CONTAINER CONTACT
        <div className="containerContact">
            <div className="contactData">
                <div className="dataData">
                    <strong>
                        <p>Jorge Luis Martin Lorenzo</p>
                        <p>Full Stack Developer</p>
                        <p>Valencia, Spain</p>
                        <p>jorgemctin.dev@gmail.com</p>
                    </strong>
                </div>
            </div>

            {/* BUTTON LINKEDIN, CV'S AND GITHUB */}
            <div className="buttonsContact">
                <PortfolioButton
                    href={"https://www.linkedin.com/in/jorge-luis-martin-lorenzo/"}
                    text={"LinkedIn"}
                />
                <PortfolioButton
                    onClick={handleOpenModal}
                    text={"CV"}

                />
                <PortfolioButton
                    href={"https://github.com/jorgemctin"}
                    text={"GitHub"}
                />
            </div> {showModal && <LanguageModal show={showModal} onClose={handleCloseModal} />}
        </div>
    );
};