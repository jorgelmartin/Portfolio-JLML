import React from 'react';
import { Modal } from 'react-bootstrap';


export const LanguageModal = ({ show, onClose,  }) => { 

    return (
        <>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        What language do you prefer?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <button><a href="https://laravel-akdemyproject-production.up.railway.app/images/JorgeLuisMartinLorenzoIngles.pdf" target="_blank" rel="noopener noreferrer">English</a></button>
                    <button><a href="https://laravel-akdemyproject-production.up.railway.app/images/JorgeLuisMartinLorenzo.pdf" target="_blank" rel="noopener noreferrer">Spanish</a></button>
                </Modal.Body>
            </Modal>
        </>
    );
};