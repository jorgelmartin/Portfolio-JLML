import React from 'react';
import { Modal } from 'react-bootstrap';
import { PortfolioButton } from '../PortfolioButton/PortfolioButton';

export const LanguageModal = ({ show, onClose  }) => { 
    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title >
                        Seleciona un idioma
                        </Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex'>
                    <PortfolioButton
                    href={"https://laravel-akdemyproject-production.up.railway.app/images/JorgeLuisMartinLorenzoIngles.pdf"}
                    text={"Inglés"}
                    />
                    <PortfolioButton
                    href={"https://laravel-akdemyproject-production.up.railway.app/images/JorgeLuisMartinLorenzo.pdf"}
                    text={"Español"}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
};