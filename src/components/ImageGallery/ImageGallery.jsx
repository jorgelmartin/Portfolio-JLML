import React from "react";
import { Button, Modal } from "react-bootstrap";

//IMAGE GALLERY
export const ImageGallery = ({ description, images, toggleGallery, galleryVisible, currentImageIndex, prevImage, nextImage }) => {
    return (
        <div>
            {/* MODAL SHOWING THE PROJECTS PICTURES */}
            <Modal show={galleryVisible} onHide={toggleGallery} >
                <Modal.Header closeButton>
                    <Modal.Title>Gallery</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="imageGallery">
                        <img src={images[currentImageIndex]} alt="" style={{
                            minHeight: '13em',
                            maxHeight: '24em',
                            minWidth: '20em'
                        }} />
                        {description}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={prevImage}>Anterior</Button>
                    <Button variant="secondary" onClick={nextImage}>Siguiente</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};